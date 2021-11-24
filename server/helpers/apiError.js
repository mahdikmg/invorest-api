const httpstatusCode = require("http-status");

/**
 * @extends Error
 */
class ExtendableError extends Error {
  constructor(message, statusCode, isPublic) {
    super(message);
    this.name = this.constructor.name;
    this.message = message;
    this.statusCode = statusCode;
    this.isPublic = isPublic;
    this.isOperational = true; // This is required since bluebird 4 doesn't append it anymore.
    Error.captureStackTrace(this, this.constructor.name);
  }
}

/**
 * Class representing an API error.
 * @extends ExtendableError
 */
class APIError extends ExtendableError {
  /**
   * Creates an API error.
   * @param {string} message - Error message.
   * @param {number} statusCode - HTTP statusCode code of error.
   * @param {boolean} isPublic - Whether the message should be visible to user or not.
   */
  constructor(
    message,
    statusCode = httpstatusCode.INTERNAL_SERVER_ERROR,
    isPublic = false
  ) {
    super(message, statusCode, isPublic);
  }
}

module.exports = APIError;
