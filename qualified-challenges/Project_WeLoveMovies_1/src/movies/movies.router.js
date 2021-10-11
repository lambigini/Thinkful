const router = require("express").Router({ mergeParams: true });
const controller = require("./movies.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");
const { route } = require("../app");

router.route("/").get(controller.list).all(methodNotAllowed);

// router.route("/movies?is_showing=true").all(methodNotAllowed);

router.route("/:movieId").get(controller.read).all(methodNotAllowed);

module.exports = router;
