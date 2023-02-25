const express = require("express");
var router = express();
const multer = require("multer");
const User = require("../Model/userModel");
const bodyparser = require("body-parser");
router.use(bodyparser.json());
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

const user = require("../Controllers/AuthController");

const employ = require("../Controllers/employ.controller");
const auth = require("../Middlewares/AuthMiddleware");

router.post("/signup", user.signup);
router.post("/login", user.login);
router.get("/page/:id", user.page);
router.get("/user", user.profile);

router.post("/upload", upload.single("image"), (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  const image = req.file.filename;

  const data = new User({
    name: name,
    email: email,
    image: image,
    password: password,
  });

  data.save((err) => {
    if (err) {
      console.log(err);
    }
  });

  res.send("Data uploaded successfully");
});

router.post("/employ/profile", auth.accessToken, employ.employeeProfession);
router.put("/employ/profile", auth.accessToken, employ.updateProfession);

module.exports = router;
