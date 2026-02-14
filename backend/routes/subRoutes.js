const express = require("express");
const router = express.Router();
const { subscribeEmail } = require("../controllers/subController");

// Route
router.post("/subscribe", subscribeEmail);

module.exports = router;
