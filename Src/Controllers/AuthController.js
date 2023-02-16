const UserService = require("../Services/UserService");
const MiscService = require("../Services/MiscServices");
const User = require("../Model/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const signup = async (req, res) => {
  User.findOne({ email: req.body.email }).then(async (user) => {
    if (user) {
      return res.status(404).json({ message: "User already registered" });
    } else {
      const name = req.body.name;
      const email = req.body.email;
      const password = await MiscService.encryptPassword(req.body.password);
      let user = new User({
        name,
        email,
        password,
      });
      user
        .save()
        .then((data) => {
          res.status(201).json({ message: "Created", data });
        })
        .catch((e) => res.status(500).json({ error: e }));
    }
  });
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

        User.findOneAndUpdate(filter, update, { new: true }).then(
          (result) => {}
        );

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

module.exports = { signup, login };
