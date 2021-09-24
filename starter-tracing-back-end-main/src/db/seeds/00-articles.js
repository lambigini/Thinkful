const observations = require("./00-articles.json");

exports.seed = function (knex) {
  return knex
    .raw("TRUNCATE TABLE articles RESTART IDENTITY CASCADE")
    .then(() => knex("articles").insert(observations));
};
