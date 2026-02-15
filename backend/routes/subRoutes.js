const express = require("express");
const router = express.Router();
const { subscribeEmail } = require("../controllers/subController");
const { addReview } = require("../controllers/reviewController");

// Route
router.post("/subscribe", subscribeEmail);
router.post("/reviews", addReview);

module.exports = router;
