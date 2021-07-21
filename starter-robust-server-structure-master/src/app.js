const express = require("express");
const app = express();

// TODO: Follow instructions in the checkpoint to implement ths API.
const flips = require("./data/flips-data");
const counts = require("./data/counts-data");

app.use(express.json());

let lastFlipId = flips.reduce((maxId, flip) => Math.max(maxId, flip.id), 0);

app.post("/flips", (req, res, next) => {
  const { data: { result } = {} } = req.body;

  if (result) {
    const newFlip = {
      id: ++lastFlipId,
      result: result,
    };

    console.log("result ", result);
    console.log("newFlip ", newFlip);

    flips.push(newFlip);
    counts[result] = counts[result] + 1;

    res.status(201).json({ data: newFlip });
  } else res.sendStatus(400);
});

app.use("/counts/:countId", (req, res, next) => {
  const { countId } = req.params;
  const foundCount = counts[countId];

  if (foundCount === undefined) {
    next(`Count id not found: ${countId}`);
  } else {
    res.json({ data: foundCount });
  }
});

app.use("/counts", (req, res) => {
  res.json({ data: counts });
});

app.use("/flips/:flipId", (req, res, next) => {
  const { flipId } = req.params;
  const foundFlip = flips.find((flip) => flip.id === Number(flipId));

  if (foundFlip) {
    res.json({ data: foundFlip });
  } else {
    next(`Flip id not found: ${flipId}`);
  }
});

app.get("/flips", (req, res) => {
  res.json({ data: flips });
});

// Not found handler
app.use((request, response, next) => {
  next(`Not found: ${request.originalUrl}`);
});

// Error handler
app.use((error, request, response, next) => {
  console.error(error);
  response.send(error);
});

module.exports = app;
