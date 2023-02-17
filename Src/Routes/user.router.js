const express = require("express");
var router = express();
const bodyparser = require("body-parser");
router.use(bodyparser.json());

const user = require("../Controllers/AuthController");
const auth = require("../Middlewares/AuthMiddleware");

router.post("/signup", user.signup);
router.post("/login", user.login);
router.get("/page/:id", user.page);

router.get("/profile", auth.accessToken, user.profile);

module.exports = router;
