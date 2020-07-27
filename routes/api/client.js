const router = require("express").Router();
const clientController = require("../../controllers/clientController");

// Matches with "/api/books"
router.route("/about")
  .get(clientController.findAll)
  .post(clientController.create);

// Matches with "/api/books/:id"
router
  .route("/about/:id")
  .get(clientController.findById)
  .put(clientController.update)
  .delete(clientController.remove);

module.exports = router;
