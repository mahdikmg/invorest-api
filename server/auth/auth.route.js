const express = require("express");
const { validate, Joi } = require("express-validation");

const controllers = require("./auth.controller");

const paramValidation = {
  login: {
    body: Joi.object({
      username: Joi.string().required(),
      password: Joi.string().required(),
    }),
  },
};

const router = express.Router();
router.route("/").post(validate(paramValidation.login), controllers.login);

module.exports = router;
