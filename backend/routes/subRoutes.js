const express = require("express");
const router = express.Router();
const { subscribeEmail } = require("../controllers/subController");
const { addReview, getReviews } = require("../controllers/reviewController");
const bookingRoutes = require("./bookingRoutes");

// Route
router.post("/subscribe", subscribeEmail);
router.post("/reviews", addReview);
router.get("/getreviews", getReviews);
router.use("/api", bookingRoutes);



module.exports = router;
