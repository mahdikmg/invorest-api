require("module-alias/register");

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");

const db = require("./models/db");
database = db;

const app = express();

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

app.use(logger("dev"));

const apiRoutes = require("./api.route");
app.use("/api/v1", apiRoutes);

module.exports = app;
