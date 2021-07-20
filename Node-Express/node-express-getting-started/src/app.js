const express = require("express");
const morgan = require("morgan");
const app = express();

// Application-level middleware
app.use(morgan("dev"));

// Route functions
const sayHello = (req, res, next) => {
  const name = req.query.name;
  const content = name ? `Hello, ${name}!` : "Hello!";
  res.send(content);
};

const sayGoodbye = (req, res, next) => {
  res.send("Sorry to see you go!");
};

const saySomething = (req, res, next) => {
  const greeting = req.params.greeting;
  const name = req.query.name;

  const content = greeting && name ? `${greeting}, ${name}!` : `${greeting}!`;
  res.send(content);
};

const checkForAbbreviationLength = (req, res, next) => {
  const abbreviation = req.params.abbreviation;

  if (abbreviation.length !== 2)
    next(`State abbreviation ${abbreviation}  is invalid`);
  else next();
};

// Routes

app.use(checkForAbbreviationLength);

// app.get(
//   "/states/:abbreviation",
//   checkForAbbreviationLength,

//   (req, res, next) => {
//     res.send(`${req.params.abbreviation} is a nice state, I like to visit`);
//   }
// );

// app.get(
//   "/travel/:abbreviation",
//   checkForAbbreviationLength,

//   (req, res, next) => {
//     res.send(`Enjoy your trip to ${req.params.abbreviation} `);
//   }
// );

// app.get("/hello", sayHello);
// app.get("/say/goodbye", sayGoodbye);
// app.get("/say/:greeting", saySomething);

// app.use((err, req, res, next) => {
//   console.error(err);
//   res.send(err);
// });

module.exports = app;
