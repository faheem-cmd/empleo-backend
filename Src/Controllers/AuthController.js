const UserService = require("../Services/UserService");
const MiscService = require("../Services/MiscServices");
const User = require("../Model/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(404).json({ message: "User already registered" });
    } else {
      const { name, email, password } = req.body;
      const encryptedPassword = await MiscService.encryptPassword(password);
      let user = new User({
        name,
        email,
        password: encryptedPassword,
      });
      user
        .save()
        .then((data) => {
          res
            .status(201)
            .json({ message: "Created", username: name, email: email });
        })
        .catch((e) => res.status(500).json({ error: e }));
    }
  } catch (e) {}
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
        });
      } else {
        return res.status(404).json({ message: "Invalid credentails" });
      }
    }
  });
};

async function profile(req, res) {
  let user_id = req.user.user_data.user_id;

  await User.findById(user_id).then((data) => {
    const newData = {
      id: data._id,
      name: data.name,
      email: data.email,
    };
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

module.exports = { signup, login, profile, page };
