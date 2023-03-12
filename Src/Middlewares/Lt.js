const jwt = require("jsonwebtoken");
const User = require("../Model/userModel");
const redisClient = require("redis");

const checkSession = async (req, res, next) => {
  console.log(req);
  const token = req.headers.authorization.split(" ")[1];
  const decoded = jwt.verify(token, "access-key-secrete");
  console.log(decoded);
  const session = await redisClient.getAsync(decoded.user_id);

  if (session) {
    return res.status(401).json({ error: "User already logged in" });
  }
  next();
};

module.exports = {
  checkSession,
};
