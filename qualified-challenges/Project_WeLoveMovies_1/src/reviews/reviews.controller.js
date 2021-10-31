const reviewService = require("./reviews.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function reviewExist(req, res, next) {
  const review = await reviewService.read(req.params.reviewId);
  console.log(review);
  if (review) {
    res.locals.review = review;
    return next();
  }
  next({
    status: 404,
    message: "Review cannot be found.",
  });
}

function destroyReview(req, res, next) {
  reviewService
    .delete(res.locals.review.review_id)
    .then(() => res.sendStatus(204))
    .catch(next);
}

function read(req, res, next) {
  const { review: data } = res.locals;

  res.json({ data });
}

function update(req, res, next) {
  const updateReview = {
    ...req.body.data,
    review_id: res.locals.review.review_id,
  };

  reviewService
    .update(updateReview)
    .then((data) => res.json({ data }))
    .catch(next);
}

module.exports = {
  read: [asyncErrorBoundary(reviewExist), read],
  delete: [asyncErrorBoundary(reviewExist), asyncErrorBoundary(destroyReview)],
  update: [asyncErrorBoundary(reviewExist), asyncErrorBoundary(update)],
};
