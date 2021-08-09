const router = require("express").Router({ mergeParams: true });

const controller = require("./rating.controller");

const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/:ratingId").get(controller.read).all(methodNotAllowed);

router.route("/").get(controller.list).all(methodNotAllowed);

module.exports = router;
