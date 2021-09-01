exports.up = function (knex) {
  return knex.schema.createTable("categories", (table) => {
    table.increments("category_id").primary();
    table.string("category_name");
    table.text("category_description");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("categories");
};
