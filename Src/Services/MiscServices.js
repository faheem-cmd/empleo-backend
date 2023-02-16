const becrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
module.exports = {
  encryptPassword: (string) => {
    return becrypt.hash(string, 10);
  },
  verifyPassword: (password, Password) => {
    return new Promise((resolve, reject) => {
      becrypt.compare(password, Password).then((status) => {
        status ? resolve(true) : reject({ error: "invalid email or password" });
      });
    });
  },
  generateToken: (id) => {
    return jwt.sign({ id }, process.env.key, { expiresIn: "30d" });
  },
  verifyToken: () => {
    return jwt.verify(token, process.env.key);
  },
};
