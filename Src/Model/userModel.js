const mongoose = require("mongoose");
const userModal = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    // phone: { type: String, required: true },
    // location: { type: String, required: true },
    // user_type: { type: Boolean, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
module.exports = User = mongoose.model("User", userModal);
