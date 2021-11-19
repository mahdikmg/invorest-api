const express = require("express");
const validate = require("express-validation");
const joi = require("joi");

const controllers = require("./user.controller");

const paramValidation = {};

const router = express.Router();
router.route("/").get(controllers.list);

module.exports = router;
