const httpStatus = require("http-status");
const APIError = require("@root/server/helpers/apiError");
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return next(
          new APIError("Token Expired", httpStatus.UNAUTHORIZED, true)
        );
      }

      req.user = user;
      next();
    });
  } else {
    return next(new APIError("Token Expired", httpStatus.UNAUTHORIZED, true));
  }
};
