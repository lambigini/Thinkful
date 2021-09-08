const service = require("./posts.service.js");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function postExists(req, res, next) {
  const { postId } = req.params;

  const post = await service.read(postId);
  if (post) {
    res.locals.post = post;
    return next();
  }
  return next({ status: 404, message: `Post cannot be found.` });
}

async function create(req, res) {
  // your solution here
  res.status(201).json({ data: await service.create(req.body.data) });
}

async function update(req, res) {
  // your solution here
  const updatePost = {
    ...req.body.data,
    post_id: res.locals.post.post_id,
  };

  const data = await service.update(updatePost);

  res.json({ data: data });
}

async function destroy(req, res) {
  // your solution here
  await service.delete(res.locals.post.post_id);

  res.sendStatus(204);
}

module.exports = {
  create: asyncErrorBoundary(create),
  update: [asyncErrorBoundary(postExists), asyncErrorBoundary(update)],
  delete: [asyncErrorBoundary(postExists), asyncErrorBoundary(destroy)],
};
