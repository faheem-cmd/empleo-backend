const express = require("express");
var router = express();
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const User = require("../Model/userModel");
const bodyparser = require("body-parser");
router.use(bodyparser.json());
router.use(express.static("./uploads"));
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
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
  const imagePath = req.file.path;
  const imageRelativePath = "/" + imagePath.replace(/\\/g, "/");
  const imageUrl = req.protocol + "://" + req.get("host") + imageRelativePath;
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const image = imageUrl;

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

  res.json({ message: "success" });
});

router.post("/employ/profile", auth.accessToken, employ.employeeProfession);
router.put("/employ/profile", auth.accessToken, employ.updateProfession);

module.exports = router;
