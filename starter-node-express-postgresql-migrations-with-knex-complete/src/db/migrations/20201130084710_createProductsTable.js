exports.up = function (knex) {
  return knex.schema.createTable("products", (table) => {
    table.increments("product_id").primary();
    table.string("product_sku");
    table.string("product_name");
    table.text("product_description");
    table.integer("product_quantity_in_stock");
    table.decimal("product_weight_in_lbs");
    table.integer("supplier_id").unsigned().notNullable();
    table
      .foreign("supplier_id")
      .references("supplier_id")
      .inTable("suppliers")
      .onDelete("cascade");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("products");
};
