const express = require("express");
const shareController = require("../controllers/share");
const validate = require("../middlewares/validation");
const { addShare } = require("../validations/share");
const router = express.Router();

router.route("/add").post(validate(addShare, "body"), shareController.add);

module.exports = router;
