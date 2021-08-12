const uses = require("../data/uses-data");

function useExist(req, res, next) {
  const { useId } = req.params;

  // console.log("urlId ", urlId);
  console.log("useId ", useId);

  const found = uses.find((use) => use.id === Number(useId));

  if (found === undefined) {
    return next({
      status: 404,
      message: `Use Id not found: ${useId}`,
    });
  }
  res.locals.use = found;
  next();
}

function list(req, res) {
  res.status(200).json({ data: uses });
}

function read(req, res, next) {
  res.json({ data: res.locals.use });
}

function deleteUse(req, res, next) {
  const { useId, urlId } = req.params;
  const index = uses.findIndex((use) => use.id === Number(useId));
  const deleteEmlement = uses.splice(index, 1);

  res.sendStatus(204);
}

module.exports = {
  list,
  read: [useExist, read],
  delete: [useExist, deleteUse],
};
