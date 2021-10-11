if (process.env.USER) require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());

const moviesRouter = require("./movies/movies.router");

// Get all movies
app.use("/movies", moviesRouter);
// app.use("/movies?is_showing=true", moviesRouter);

// // Read one movie
// app.use("/movies/:movieId", moviesRouter);
// app.use("/movies/:movieId/theaters", moviesRouter);
// app.use("/movies/:movieId/reviews", moviesRouter);

// // Destroy review
// app.use("/reviews/:reviewId", reviewRouter);

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
