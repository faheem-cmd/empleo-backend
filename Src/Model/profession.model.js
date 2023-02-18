const mongoose = require("mongoose");

const certificateScheme = new mongoose.Schema({
  cer_name: String,
});

const professionModal = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    user_id: { type: String, required: true, unique: true },
    job: { type: String, required: true },
    experience: { type: String, required: true },
    certifications: [{ type: certificateScheme }],
    graduation: { type: String, required: true },
    secondory_education: { type: String, required: true },
    profession: { type: String, required: true },
    skills: [
      {
        type: String,
      },
    ],
    user_type: { type: Boolean, required: true },
  },
  {
    timestamps: true,
  }
);
module.exports = Profession = mongoose.model("Profession", professionModal);
