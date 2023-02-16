const User = require("../Model/userModel");
module.exports = {
  getUser: (email) => {
    return User.findOne({ email });
  },
  createUser: (user) => {
    return User.create(user);
  },
  getUserByid:(id)=>{
    return User.findById(id).select("-password")
  }
};
