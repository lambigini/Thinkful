const knex = require("../db/connection");
const mapProperties = require("../utils/map-properties");

const addCritic = mapProperties({
  preferred_name: "critic.preferred_name",
  surname: "critic.surname",
  organization_name: "critic.organization_name",
});

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

function updateJoinTable(reviewId) {
  return knex("reviews")
    .join("critics", "reviews.critic_id", "critics.critic_id")
    .select("*")
    .where({ review_id: reviewId })
    .then((updateRecords) => updateRecords[0])
    .then((result) => {
      return addCritic(result);
    });
}

module.exports = {
  read,
  delete: destroy,
  update,
  updateJoinTable,
};
