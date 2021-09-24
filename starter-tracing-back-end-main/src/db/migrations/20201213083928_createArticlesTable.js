exports.up = function (knex) {
  return knex.schema.createTable("articles", (table) => {
    table.increments("article_id").primary();
    table.string("title", null);
    table.text("url", null);
    table.text("summary");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("articles");
};
