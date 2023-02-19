const UserService = require("../Services/UserService");
const MiscService = require("../Services/MiscServices");
const User = require("../Model/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Profession = require("../Model/profession.model");

async function employeeProfession(req, res, next) {
  const {
    email,
    job,
    experience,
    certifications,
    cer_name,
    graduation,
    secondory_education,
    profession,
    skills,
  } = req.body;
  let employProfession = new Profession({
    email,
    job,
    experience,
    certifications,
    cer_name,
    graduation,
    secondory_education,
    profession,
    skills,
    user_id: req.user.user_data.user_id,
    user_type: false,
  });

  const exist = await Profession.findOne({
    user_id: req.user.user_data.user_id,
  });
  if (exist) {
    return res.status(404).json({ message: "User already registered" });
  } else {
    employProfession.save().then((data) => {
      res.status(201).json({ status: "created", data: data, succes: true });
    });
  }
}

async function updateProfession(req, res, next) {
  let user_id = req.user.user_data.user_id;
  const {
    email,
    job,
    experience,
    certifications,
    cer_name,
    graduation,
    secondory_education,
    profession,
    skills,
  } = req.body;
  const updatedData = {
    email,
    job,
    experience,
    certifications,
    cer_name,
    graduation,
    secondory_education,
    profession,
    skills,
  };

  const user = await Profession.findOne({ user_id: user_id });

  Profession.updateOne(
    { _id: user._id },
    { $pull: { certifications: { _id: "63f06b6c31478d87728efbd3" } } },
    { safe: true, multi: true },
    function (err, obj) {
      //do something smart
      console.log(obj);
    }
  );
  Profession.findByIdAndUpdate(user._id, updatedData, (err, emp) => {
    if (err) {
      return res
        .status(500)
        .send({ error: "Problem with Updating the   Employee recored " });
    }

    res.send({ status: "success", message: "Updation successfull", data: emp });
  });
}

module.exports = { employeeProfession, updateProfession };
