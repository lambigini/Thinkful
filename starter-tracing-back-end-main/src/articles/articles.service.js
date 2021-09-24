const knex = require("../db/connection");

const tableName = "articles";

function create(newObservation) {
  return knex(tableName).insert(newObservation, "*");
}

function list() {
  return knex(tableName).select();
}

module.exports = {
  create,
  list,
};
