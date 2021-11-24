const httpStatus = require("http-status");
const APIError = require("@root/server/helpers/apiError");
// const { User } = require("@root/models/db");

function list(req, res, next) {
  database.User.findAll()
    .then((list) => {
      res.send({ result: list });
    })
    .catch((err) => {
      const errd = new APIError(
        "Database Error",
        httpStatus.INTERNAL_SERVER_ERROR,
        true
      );
      next(errd);
    });
}

module.exports = { list };
