const theaterService = require("./theaters.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function list(req, res, next) {
  // const data = await theaterService.list();
  // res.json({ data });
  let data = await theaterService.list();

  res.json({ data });
}

module.exports = {
  list: asyncErrorBoundary(list),
};
