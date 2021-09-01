const products = require("../fixtures/products");

exports.seed = function (knex) {
  return knex
    .raw("TRUNCATE TABLE products RESTART IDENTITY CASCADE")
    .then(function () {
      return knex("products").insert(products);
    });
};
