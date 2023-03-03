const UserService = require("../Services/UserService");
const MiscService = require("../Services/MiscServices");
const User = require("../Model/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Profession = require("../Model/profession.model");
const cloudinary = require("cloudinary");

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
      const encryptedPassword = await MiscService.encryptPassword(password);
      let user = new User({
        name,
        email,
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
    // console.log(e);
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
        let accessToken = jwt.sign({ user_data }, process.env.key, {
          expiresIn: "2d",
        });

        // let refreshToken = jwt.sign({ user }, "refresh-key-secrete", {
        //   expiresIn: "7d",
        // });
        let first_time = await Profession.findOne({ email: req.body.email });
        const update = {
          access_token: accessToken,
          //refresh_token: refreshToken,
        };
        User.findOneAndUpdate(filter, update, { new: true });
        const tokens = {
          accessToken,
          // refreshToken,
        };
        return res.status(200).json({
          status: "success",
          data: tokens,
          message: "Logged in successfully",
          first_time: first_time == null ? true : false,
        });
      } else {
        return res.status(404).json({ message: "Invalid credentails" });
      }
    }
  });
};

async function profile(req, res) {
  // let user_id = req.user.user_data.user_id;
  await User.find({}).then((data) => {
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
  const { limit = 2 } = req.query;
  console.log(req.params.id);

  try {
    const data = await User.find()
      .limit(limit * 1)
      .skip((req.params.id - 1) * limit)
      .exec();
    const count = await User.countDocuments();

    res.json({
      data,
      totalPages: Math.ceil(count / limit),
      currentPage: req.params.id,
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

module.exports = { signup, login, profile, page, upload };
