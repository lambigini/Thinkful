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

module.exports = {
  delete: [asyncErrorBoundary(reviewExist), asyncErrorBoundary(destroyReview)],
};
