const urls = require("../data/urls-data");

const uses = require("../data/uses-data");

function list(req, res) {
  console.log("urls ", urls);

  res.json({ data: urls });
}

module.exports = {
  list,
};
