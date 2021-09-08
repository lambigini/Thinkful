const service = require("./comments.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function commentExists(req, res, next) {
  const { commentId } = req.params;
  const comment = await service.read(commentId);
  if (comment) {
    res.locals.comment = comment;
    return next();
  }
  return next({ status: 404, message: `Comment cannot be found.` });
}

async function list(req, res, next) {
  // your solution here
  res.json({ data: await service.list() });
}

async function listCommenterCount(req, res, next) {
  // your solution here
  const data = await service.listCommenterCount();
  console.log("data ", data);

  const result = data.map((d) => ({
    commenter_email: d.commenter_email,
    count: Number(d.count),
  }));
  res.json({ data: result });
}

async function read(req, res, next) {
  const knexInstance = req.app.get("db");
  const { comment } = res.locals;
  res.json({ data: comment });
}

module.exports = {
  list: asyncErrorBoundary(list),
  listCommenterCount: asyncErrorBoundary(listCommenterCount),
  read: [asyncErrorBoundary(commentExists), read],
};
