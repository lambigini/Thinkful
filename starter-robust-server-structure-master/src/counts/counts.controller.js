const counts = require("../data/counts-data");

function countExists(req, res, next) {
  const { countId } = req.params;
  const foundCount = counts[countId];

  if (foundCount === undefined) {
    return next({
      status: 404,
      message: `Count id not found: ${countId}`,
    });
  }
  res.locals.count = foundCount;
  next();
}

function read(req, res, next) {
  res.json({
    data: res.locals.count,
  });
}

function list(req, res) {
  res.json({ data: counts });
}

module.exports = {
  list,
  read: [countExists, read],
  countExists,
};
