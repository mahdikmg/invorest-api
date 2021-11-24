const express = require("express");
const jwtValidator = require("@root/server/helpers/authenticateJWT");

const controllers = require("./user.controller");

const router = express.Router();
router.route("/").get(jwtValidator, controllers.list);

module.exports = router;
