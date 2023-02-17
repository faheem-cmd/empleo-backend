const jwt = require("jsonwebtoken");
const User = require("../Model/userModel");
// require("dotenv").config();

const accessToken = async (req, res, next) => {
  let authHeader = req.headers["authorization"];
  let token = authHeader && authHeader.split(" ")[1]; //Access token
  let filter = { access_token: token };

  User.find(filter).then((result) => {
    const user = result[0];
    if (!user) {
      zw;
      return res
        .status(403)
        .json({ status: "error", message: "Unauthenticated" });
    }
    jwt.verify(token, process.env.key, (err, user) => {
      if (!err) {
        req.user = user;
        next();
      } else {
        return res
          .status(403)
          .json({ status: "error", message: "Unauthenticated" });
      }
    });
  });
};

module.exports = {
  accessToken,
};
