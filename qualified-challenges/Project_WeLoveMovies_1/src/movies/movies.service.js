const knex = require("../db/connection");

function list() {
  return knex("movies").select("*");
}

// function read(movieId) {
//   // return knex("movies as m")
//   //   .select("*")
//   //   .where({
//   //     movie_id: movieId,
//   //   })
//   //   .first();

//   return knex("movies").select("*").where({ movie_id: movieId }).first();
// }

function read(id) {
  return knex("movies")
    .select("*")
    .where({ movie_id: id })
    .groupBy("movies.movie_id")
    .first();
}

module.exports = {
  list,
  read,
};
