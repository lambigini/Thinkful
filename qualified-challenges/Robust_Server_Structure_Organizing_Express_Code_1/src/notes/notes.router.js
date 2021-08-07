const router = require("express").Router();
const controller = require("./notes.controller");

router.route("/").post(controller.create).get(controller.list);

router
  .route("/:noteId")
  .get(controller.read)
  .put(controller.update)
  .delete(controller.delete);

module.exports = router;
