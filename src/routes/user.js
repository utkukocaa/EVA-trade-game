const express = require("express");
const userController = require("../controllers/user");
const validate = require("../middlewares/validation");
const { createUser, controlBodyForExchange } = require("../validations/user");
const router = express.Router();

router
  .route("/register")
  .post(validate(createUser, "body"), userController.create);
router
  .route("/buy/:userId")
  .post(validate(controlBodyForExchange, "body"), userController.buy);
router
  .route("/sell/:userId")
  .post(validate(controlBodyForExchange, "body"), userController.sell);

module.exports = router;
