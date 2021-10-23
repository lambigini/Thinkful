const knex = require("../db/connection");
const mapProperties = require("../utils/map-properties");

const addCritic = mapProperties({
  critic_id: "critic.critic_id",
  preferred_name: "critic.preferred_name",
  surname: "critic.surname",
  organization_name: "critic.organization_name",
});

function list() {
  return knex("movies").select("*");
}

function listMoviesShowing() {
  return knex("movies")
    .join("movies_theaters", "movies.movie_id", "movies_theaters.movie_id")
    .select("movies.*")
    .where({ "movies_theaters.is_showing": true })
    .groupBy("movies.movie_id");
}

function read(movieId) {
  return knex("movies").select("*").where({ movie_id: movieId }).first();
}

function listMovieShowAtTheater(movieId) {
  return knex("movies_theaters as mt")
    .join("theaters as t", "mt.theater_id", "t.theater_id")
    .select("*")
    .where({ movie_id: movieId, is_showing: true });
}

function listReviews(movieId) {
  return knex("reviews as r")
    .join("critics as c", "r.critic_id", "c.critic_id ")
    .select("*")
    .where({ movie_id: movieId })
    .then((result) => {
      return result.map((item) => addCritic(item));
    });
}

module.exports = {
  list,
  listMoviesShowing,
  listMovieShowAtTheater,
  read,
  listReviews,
};
