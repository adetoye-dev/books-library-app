const dotenv = require("dotenv");
dotenv.config();

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  res.status(statusCode);

  //There is a bug to fix here- res.json function does not return the true statement when the case is true
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

module.exports = {
  errorHandler,
};
