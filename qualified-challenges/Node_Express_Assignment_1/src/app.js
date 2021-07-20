const express = require("express");
const validateZip = require("./middleware/validateZip");
const getZoos = require("./utils/getZoos");

const app = express();

app.get("/check/:zip", validateZip, (req, res, next) => {
  const zip = req.params.zip;

  if (getZoos(zip)) res.send(`${zip} exists in our records.`);
  else res.send(`${zip} does not exist in our records.`);
});

app.get("/zoos/all", (req, res, next) => {
  const admin = req.query.admin;

  if (admin === "true") res.send(`All zoos: ${getZoos().join("; ")}`);
  else res.send("You do not have access to that route.");
});

app.get("/zoos/:zip", validateZip, (req, res, next) => {
  const zip = req.params.zip;

  if (getZoos(zip).length === 0) res.send(`${zip} has no zoos.`);
  else res.send(`${zip} zoos: ${getZoos(zip).join("; ")}`);
});

app.use((req, res, next) => {
  res.send(`That route could not be found!`);
});
module.exports = app;
