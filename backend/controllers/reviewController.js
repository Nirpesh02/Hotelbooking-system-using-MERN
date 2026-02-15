const Review = require("../models/reviewModel");

// Add a new review
const addReview = async (req, res) => {
  try {
    const { name, email, review } = req.body;
    if (!name || !email || !review) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const newReview = await Review.create({ name, email, review });
    res.status(201).json(newReview);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get all reviews
const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    res.json(reviews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { addReview, getReviews };
