const knex = require("../db/connection");

function create(post) {
  //your solution here
}

function read(postId) {
  return knex("posts").select("*").where({ post_id: postId }).first();
}

function update(updatedPost) {
  //your solution here
}

function destroy(postId) {
  //your solution here
}

module.exports = {
  create,
  read,
  update,
  delete: destroy,
};
