const knex = require("../db/connection");

function list() {
  return knex("products").select("*");
}

function read(product_id) {
  return knex("products").select("*").where({ product_id }).first();
}

function listOutOfStockCount() {
  return knex("products")
  .select("product_quantity_in_stock as out_of_stock")
  .count("product_id")
  .where({product_quantity_in_stock: 0})
  .groupBy("out_of_stock");
}

function listPriceSummary() {
  return knex("products")
    .select("supplier_id")
    .min("product_price")
    .max("product_price")
    .avg("product_price")
    .groupBy("supplier_id");
}

function listTotalWeightByProduct() {
  return knex("products")
    .select(
      "product_sku",
      "product_title",
      knex.raw(
        "sum(product_weight_in_lbs * product_quantity_in_stock) as total_weight_in_lbs"
      )
    )
    .groupBy("product_title", "product_sku");
}

module.exports = {
  list,
  read,
  listOutOfStockCount,
  listPriceSummary,
  listTotalWeightByProduct
};


