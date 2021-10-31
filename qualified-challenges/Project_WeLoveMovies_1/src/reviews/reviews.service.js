const knex = require("../db/connection");

function read(reviewId) {
  return knex("reviews").select("*").where({ review_id: reviewId }).first();
}

function destroy(reviewId) {
  return knex("reviews").where({ review_id: reviewId }).del();
}

function update(newUpdateReviewOBject) {
  return knex("reviews")
    .select("*")
    .where({ review_id: newUpdateReviewOBject.review_id })
    .update(newUpdateReviewOBject, "*")
    .then((updateRecords) => updateRecords[0]);
}

module.exports = {
  read,
  delete: destroy,
  update,
};
