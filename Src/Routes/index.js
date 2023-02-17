const express = require("express");
const router = express.Router();
const user = require("../Controllers/AuthController");
const AuthRouter = require("./user.router");

router.use("/auth", AuthRouter);
module.exports = router;
