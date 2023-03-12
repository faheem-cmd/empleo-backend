const UserService = require("../Services/UserService");
const MiscService = require("../Services/MiscServices");
const User = require("../Model/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Profession = require("../Model/profession.model");
const cloudinary = require("cloudinary");
const redisClient = require("redis");
const session = require("express-session");
const signup = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(404).json({ message: "User already registered" });
    } else {
      // const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
      //   folder: "socialmedia/avatars",
      // });

      const { name, password, email } = req.body;
      const imagePath = req.file.path;
      const imageRelativePath = "/" + imagePath.replace(/\\/g, "/");
      const imageUrl =
        req.protocol + "://" + req.get("host") + imageRelativePath;
      const image = imageUrl;
      const encryptedPassword = await MiscService.encryptPassword(password);
      let user = new User({
        name,
        email,
        image,
        password: encryptedPassword,
      });
      user
        .save()
        .then((data) => {
          res.status(201).json({ message: "Created", data: user });
        })
        .catch((e) => res.status(500).json({ error: e }));
    }
  } catch (e) {
    console.log(e);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const filter = { email: email };
  User.find(filter).then(async (result) => {
    if (result.length == 0) {
      return res
        .status(404)
        .json({ status: "error", message: "Incorrect email" });
    } else {
      const user = result[0];
      const user_data = {
        user_id: result[0]._id,
      };

      let check = await MiscService.checkPassword(password, user.password);
      if (check) {
        let accessToken = jwt.sign({ user_data }, "access-key-secrete", {
          expiresIn: "1m",
        });
        let refreshToken = jwt.sign({ user_data }, "access-key-secrete", {
          expiresIn: "7d",
        });

        // let first_time = await Profession.findOne({ email: req.body.email });
        const update = {
          access_token: accessToken,
          refresh_token: refreshToken,
        };
        await User.findOneAndUpdate(filter, update, { new: true });
        const tokens = {
          accessToken,
          refreshToken,
        };
        return res.status(200).json({
          status: "success",
          data: tokens,
          message: "Logged in successfully",
          // first_time: first_time == null ? true : false,
        });
      } else {
        return res.status(404).json({ message: "Invalid credentails" });
      }
    }
  });
};

async function refreshToken(req, res) {
  const refresh = req.body.refreshToken;
  try {
    const decoded = jwt.verify(refresh, "access-key-secrete");
    const user = await User.findOne({
      _id: decoded.user_data?.user_id,
      refresh,
    });
    if (!user) {
      throw new Error();
    }

    const user_data = {
      user_id: user._id,
    };

    // Generate a new access token
    const accessToken = jwt.sign({ user_data }, "access-key-secrete", {
      expiresIn: "1m",
    });
    const refreshToken = jwt.sign({ user_data }, "access-key-secrete", {
      expiresIn: "7d",
    });
    const update = {
      access_token: accessToken,
      refresh_token: refreshToken,
    };
    const filter = { _id: user._id };
    await User.findOneAndUpdate(filter, update, { new: true });
    res.json({ data: update });
    // Return the new access token
  } catch (err) {
    res.status(401).json({ message: "Invalid refresh token" });
  }
}

async function profile(req, res) {
  let user_id = req.user.user_data.user_id;
  await User.find({ _id: user_id }).then((data) => {
    const newData = data?.map((item) => {
      return {
        id: item._id,
        name: item.name,
        email: item.email,
        image: item.image,
      };
    });
    res.status(200).json({ status: 200, data: newData });
  });
}

async function page(req, res) {
  const { limit = 10 } = req.query;
  console.log(req.params.id);

  try {
    const data = await User.find()
      .limit(limit * 1)
      .skip((req.params.id - 1) * limit)
      .exec();
    const count = await User.countDocuments();
    const total = await User.find();

    res.json({
      data,
      totalPages: Math.ceil(count / limit),
      currentPage: req.params.id,
      totalItems: total?.length,
    });
  } catch (err) {
    console.error(err.message);
  }
}

async function upload(req, res) {
  const imagePath = req.file.path;
  const imageRelativePath = "/" + imagePath.replace(/\\/g, "/");
  const imageUrl = req.protocol + "://" + req.get("host") + imageRelativePath;
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const image = imageUrl;
  const data = new User({
    name: name,
    email: email,
    image: image,
    password: password,
  });

  data.save((err) => {
    if (err) {
      console.log(err);
    }
  });

  res.json({ message: "success" });
}

module.exports = { signup, login, profile, page, upload, refreshToken };
