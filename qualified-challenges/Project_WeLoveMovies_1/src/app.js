if (process.env.USER) require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());

const moviesRouter = require("./movies/movies.router");
const reviewRouter = require("./reviews/reviews.router");
// Get all movies
app.use("/movies", moviesRouter);

// Destroy review
app.use("/reviews", reviewRouter);

// // update review
// app.use("/reviews/:reviewId", reviewRouter);

// // get all theaters
// app.use("theaters", theatersRouter);

// not found handler
app.use((req, res, next) => {
  next({
    status: 404,
    message: `Not found: ${req.originalUrl}`,
  });
});

// Error handler
app.use((error, req, res, next) => {
  console.error(error);
  const { status = 500, message = "Something went wrong" } = error;
  res.status(status).json({ error: message });
});

module.exports = app;
