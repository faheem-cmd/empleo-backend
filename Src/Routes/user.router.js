const express = require("express");
var router = express();
const bodyparser = require("body-parser");
router.use(bodyparser.json());

const user = require("../Controllers/AuthController");
const employ = require("../Controllers/employ.controller");
const auth = require("../Middlewares/AuthMiddleware");

router.post("/signup", user.signup);
router.post("/login", user.login);
router.get("/page/:id", user.page);

router.post("/employ/profile", auth.accessToken, employ.employeeProfession);
router.put("/employ/profile", auth.accessToken, employ.updateProfession);

module.exports = router;
