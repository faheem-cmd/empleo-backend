const express = require("express");
var mongoose = require("./Src/Config/db");
var app = express();
var cors = require("cors");
app.use(cors());
require("dotenv").config();
const { success, error } = require("consola");
const http = require("http");
const router = require("./Src/Routes");
app.use("/", router);
//MongoDB connection
const dbName = "mydb";
const dbUrl = process.env.DB_URL || `mongodb://0.0.0.0:27017/${dbName}`;
mongoose(`mongodb://0.0.0.0:27017/${dbName}`);

const server = http.createServer(app);

server.listen(process.env.PORT, () => {
  success({
    message: `Successfully connected with the database \n${dbUrl}`,
    badge: true,
  });

  success({
    message: `Server is running on \n${process.env.PORT}`,
    badge: true,
  });
});
