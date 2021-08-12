const router = require("express").Router();

const controller = require("./urls.controller");

const methodNotAllowed = require("../errors/methodNotAllowed");

const usesRouter = require("../uses/uses.router");

router
  .use("/:urlId/uses", controller.urlIdExist, usesRouter)
  .all(methodNotAllowed);

router
  .route("/:urlId")
  .get(controller.read)
  .put(controller.update)
  .all(methodNotAllowed);

router
  .route("/")
  .get(controller.list)
  .post(controller.create)
  .all(methodNotAllowed);

module.exports = router;
