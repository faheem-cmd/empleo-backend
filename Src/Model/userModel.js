const mongoose = require("mongoose");
const userModal = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: false },
    image: { type: String },
    // phone: { type: String, required: true },
    // location: { type: String, required: true },
    // user_type: { type: Boolean, required: true },
    password: { type: String, required: true },
    access_token: { type: String, default: "" },
    refresh_token: { type: String, default: "" },
    device: { type: String },
  },
  {
    timestamps: true,
  }
);
module.exports = User = mongoose.model("User", userModal);
