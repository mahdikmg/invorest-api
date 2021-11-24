require("module-alias/register");
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const { ValidationError } = require("express-validation");

const db = require("./models/db");
database = db;

const app = express();

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(logger("dev"));

const apiRoutes = require("./api.route");
app.use("/api/v1", apiRoutes);

app.use(function (err, req, res, next) {
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json(err);
  }
  const { isPublic, isOperational, ...errData } = err;
  return res.status(err.statusCode).json({ message: err.message, ...errData });
});

module.exports = app;
