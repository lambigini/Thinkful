const knex = require("../db/connection");

function list() {
  return knex("categories").select("*");
}

module.exports = {
  list,
};
