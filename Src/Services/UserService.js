const User = require("../Model/userModel");
module.exports = {
  getUser: (email) => {
    return User.find({ email });
  },
  createUser: (user) => {
    return User.create(user);
  },
};
