const express = require("express");
const app = express();

const flips = require("./data/flips-data");
const counts = require("./data/counts-data");

const flipsRouter = require("./flips/flips.router");

app.use(express.json());

app.get("/counts/:countId", (request, response, next) => {
  const { countId } = request.params;
  const foundCount = counts[countId];

  if (foundCount === undefined) {
    next({
      status: 404,
      message: `Count id not found: ${countId}`,
    });
  } else {
    response.json({ data: foundCount });
  }
});

app.get("/counts", (request, response) => {
  response.json({ data: counts });
});

app.use("/flips", flipsRouter);

// Not found handler
app.use((request, response, next) => {
  next({ status: 404, message: `Not found: ${request.originalUrl}` });
});

// Error handler
app.use((error, request, response, next) => {
  console.error(error);
  const { status = 500, message = "Something went wrong!" } = error;
  response.status(status).json({ error: message });
});

module.exports = app;
