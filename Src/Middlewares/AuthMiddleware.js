const jwt = require("jsonwebtoken");
const User = require("../Model/userModel");
// require("dotenv").config();

const accessToken = async (req, res, next) => {
  // let myUser = await req.session.user;
  let device = await req.headers["device"];
  let authHeader = await req.headers["authorization"];
  let token = authHeader && authHeader.split(" ")[1]; //Access token
  var filter;
  await jwt.verify(token, "access-key-secrete", (err, access) => {
    filter = { _id: access?.user_data?.user_id };

    User.find(filter).then((result) => {
      const user = result[0];
      if (!user) {
        return res
          .status(403)
          .json({ status: "error", message: "Unauthenticated" });
      }
      if (user) {
        if (device !== user.device) {
          return res
            .status(403)
            .json({ status: "error", message: "session expired" });
        }
      }

      if (!err) {
        req.user = access;
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
