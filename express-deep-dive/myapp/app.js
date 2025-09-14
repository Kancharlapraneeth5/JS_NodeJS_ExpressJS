const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const { logRequests } = require("./middlewares/logger.js");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const productsRouter = require("./routes/products");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(logRequests);

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);

// 404 handler – for unmatched routes
app.use((_req, _res, next) => {
  const err = new Error("Route not found");
  err.status = 404;
  next(err); // Pass the error to the error handler
});

// Error handler – for all errors including 404
app.use((err, _req, res, _next) => {
  console.error(err.stack); // Logs the error stack to the console

  res.status(err.status || 500).json({
    error: err.message || "Internal Server Error",
  });
});

module.exports = app;
