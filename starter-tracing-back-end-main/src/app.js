const express = require("express");
const cors = require("cors");

const articlesRouter = require("./articles/articles.router");
const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");
// const pinoHttp = require("pino-http");
const logger = require("./config/logger");

const app = express();

// app.use(pinoHttp());
app.use(logger);
app.use(cors());
app.use(express.json());

app.use("/articles", articlesRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
