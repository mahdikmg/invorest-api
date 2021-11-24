const httpStatus = require("http-status");
const APIError = require("@root/server/helpers/apiError");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

function login(req, res, next) {
  database.User.findOne({ where: { username: req.body.username } })
    .then((user) => {
      if (!user) {
        return next(new APIError("User Not Found", httpStatus.NOT_FOUND, true));
      }
      bcrypt.compare(req.body.password, user.password, (err, match) => {
        if (err)
          return next(
            new APIError("Server Error", httpStatus.INTERNAL_SERVER_ERROR, true)
          );
        else if (match) {
          const { password, ...userObject } = user.dataValues;
          return res.json({
            token: jwt.sign(userObject, process.env.JWT_SECRET, {
              expiresIn: "24h",
            }),
            user: userObject,
          });
        } else
          return next(
            new APIError("Passwords Do Not Match", httpStatus.FORBIDDEN, true)
          );
      });
    })
    .catch((err) => {
      next(err);
    });
}

module.exports = { login };
