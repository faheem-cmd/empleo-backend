const express = require("express");
const multer = require("multer");
const app = express();
const router = require("./Src/Routes");
const User = require("./Src/Model/userModel");
var mongoose = require("./Src/Config/db");
const path = require("path");

app.use("/", router);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const dbName = "vercity";
const dbUrl = process.env.DB_URL || `mongodb://0.0.0.0:27017/${dbName}`;
mongoose(`mongodb://0.0.0.0:27017/${dbName}`);

app.listen(8000, () => {
  console.log("Server started on port 3000");
});

// "type": "module",
