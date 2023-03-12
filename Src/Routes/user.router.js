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
const kt = require("../Middlewares/Lt");

router.post("/signup", upload.single("image"), user.signup);
router.post("/login", user.login);
router.get("/page/:id", user.page);
router.get("/user", auth.accessToken, user.profile);

router.post("/upload", upload.single("image"), user.upload);
router.post("/refresh", user.refreshToken);

router.post("/employ/profile", auth.accessToken, employ.employeeProfession);
router.put("/employ/profile", auth.accessToken, employ.updateProfession);

module.exports = router;
