const express = require("express");
const {
  createBooking,
  getBookings,
  getSingleBooking,
  updateBookingStatus,
  deleteBooking
} = require("../controllers/bookingController");

const router = express.Router();

// POST /api/bookings → Create Booking
router.post("/bookings", createBooking);

// GET /api/bookings → Get All Bookings
router.get("/bookings", getBookings);

// GET /api/bookings/:id → Get Single Booking
router.get("/bookings/:id", getSingleBooking);

// PUT /api/bookings/:id → Update Booking Status
router.put("/bookings/:id", updateBookingStatus);

// DELETE /api/bookings/:id → Delete Booking
router.delete("/bookings/:id", deleteBooking);

module.exports = router;
