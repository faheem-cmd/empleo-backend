const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
module.exports = {
  encryptPassword: (string) => {
    return bcrypt.hash(string, 10);
  },
  checkPassword: (password, existPassword) => {
    return bcrypt.compare(password, existPassword);
  },
};
