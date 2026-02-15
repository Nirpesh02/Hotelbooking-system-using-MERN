const express = require("express");
const { addReview, getReviews } = require("../controllers/reviewController");
const router = express.Router();

// POST /api/reviews → Add a review
router.post("/reviews", addReview);

// GET /api/reviews → Get all reviews
router.get("/reviews", getReviews);

module.exports = router;
