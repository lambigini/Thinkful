if (process.env.USER) require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());

app.use(cors());

const moviesRouter = require("./movies/movies.router");
const reviewRouter = require("./reviews/reviews.router");
const theatersRouter = require("./theater/theaters.router");

// Get all movies
app.use("/movies", moviesRouter);

app.use("/reviews", reviewRouter);

app.use("/theaters", theatersRouter);

// not found handler
app.use((req, res, next) => {
  next({
    status: 404,
    message: `Not found: ${req.originalUrl}`,
  });
});

// Error handler
app.use((error, req, res, next) => {
  // console.error(error);
  const { status = 500, message = "Something went wrong" } = error;
  res.status(status).json({ error: message });
});

module.exports = app;
