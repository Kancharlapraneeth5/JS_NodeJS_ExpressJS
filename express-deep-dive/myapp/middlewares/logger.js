// middleware/logger.js
module.exports.logRequests = (req, res, next) => {
  console.log(
    `${req.method} ${req.url} - User-Agent: ${req.headers["user-agent"]}`
  );
  next();
};
