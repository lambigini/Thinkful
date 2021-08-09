const flips = require("../data/flips-data");
const counts = require("../data/counts-data");

const validResult = ["heads", "tails", "edge"];

let lastFlipId = flips.reduce((maxId, flip) => Math.max(maxId, flip.id), 0);

function bodyHasResultProperty(request, response, next) {
  const { data: { result } = {} } = request.body;
  if (result) {
    return next();
  }
  next({
    status: 400,
    message: "A 'result' property is required.",
  });
}

function create(request, response, next) {
  const { data: { result } = {} } = request.body;
  const newFlip = {
    id: ++lastFlipId, // Increment last id then assign as the current ID
    result,
  };
  flips.push(newFlip);
  counts[result] = counts[result] + 1;
  response.status(201).json({ data: newFlip });
}

function destroy(request, response) {
  const { flipId } = request.params;
  const index = flips.findIndex((flip) => flip.id === Number(flipId));
  // splice returns an array of the deleted elements, even if it is one element
  const deletedFlips = flips.splice(index, 1);
  deletedFlips.forEach(
    (deletedFlip) =>
      (counts[deletedFlip.result] = counts[deletedFlip.result] - 1)
  );

  response.sendStatus(204);
}

function flipExists(request, response, next) {
  const { flipId } = request.params;
  const flip = flips.find((flip) => flip.id === Number(flipId));
  if (flip) {
    response.locals.flip = flip;
    return next();
  }
  next({
    status: 404,
    message: `Flip id not found: ${flipId}`,
  });
}

function list(req, res) {
  // response.json({ data: flips });
  const { countId } = req.params;
  const byResult = countId ? (flip) => flip.result === countId : () => true;
  console.log("byResult", byResult);

  res.json({ data: flips.filter(byResult) });
}

function read(request, response, next) {
  const { flipId } = request.params;
  const flip = flips.find((flip) => flip.id === Number(flipId));
  response.json({ data: flip });
}

function resultPropertyIsValid(request, response, next) {
  const { data: { result } = {} } = request.body;
  if (validResult.includes(result)) {
    return next();
  }
  next({
    status: 400,
    message: `Value of the 'result' property must be one of ${validResult}. Received: ${result}`,
  });
}

function update(request, response, next) {
  const flip = response.locals.flip;

  const originalResult = flip.result;
  const { data: { result } = {} } = request.body;

  if (originalResult !== result) {
    // update the flip
    flip.result = result;
    // Adjust the counts
    counts[originalResult] = counts[originalResult] - 1;
    counts[result] = counts[result] + 1;
  }

  response.json({ data: flip });
}

module.exports = {
  create: [bodyHasResultProperty, resultPropertyIsValid, create],
  list,
  read: [flipExists, read],
  update: [flipExists, bodyHasResultProperty, resultPropertyIsValid, update],
  delete: [flipExists, destroy],
};
