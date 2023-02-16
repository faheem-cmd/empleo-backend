const express = require("express");
var router = express();
const bodyparser = require("body-parser");
router.use(bodyparser.json());

const user = require("../Controllers/AuthController");

router.post("/signup", user.signup);
router.post("/login", user.login);

module.exports = router;
