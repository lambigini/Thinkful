const express = require("express");

const app = express();

app.use(express.json());

// TODO: Add code to meet the requirements and make the tests pass.
const urlsRouter = require("./urls/ulrs.router");

app.use("/urls", urlsRouter);

// not found handler

app.use((req, res, next) => {
  next({
    status: 404,
    message: `Not found: ${req.originalUrl}`,
  });
});

// error handler

app.use((err, req, res, next) => {
  const { status = 500, message = "Something went wrong" } = err;

  res.status(status).json({ error: message });
});

module.exports = app;
