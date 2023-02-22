const express = require("express");
var mongoose = require("./Src/Config/db");
var bodyParser = require("body-parser");
const cloudinary = require("cloudinary");
const fileUpload = require("express-fileupload");
const helmet = require("helmet");
const morgan = require("morgan");

var app = express();
var cors = require("cors");
app.use(cors());
require("dotenv").config();
const { success, error } = require("consola");
const http = require("http");
const router = require("./Src/Routes");
var multer = require("multer");
var forms = multer();

app.use(bodyParser.json());
app.use(forms.array([]));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", router);

app.use(fileUpload({ useTempFiles: true }));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
//MongoDB connection
const dbName = "mydb";
const dbUrl = process.env.DB_URL || `mongodb://0.0.0.0:27017/${dbName}`;
mongoose(`mongodb://0.0.0.0:27017/${dbName}`);

cloudinary.config({
  cloud_name: "dynjpjsu6",
  api_key: "137344336542521",
  api_secret: "iIqLA9oyGjiLv_qP9Nvr7hKE4CI",
});

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
