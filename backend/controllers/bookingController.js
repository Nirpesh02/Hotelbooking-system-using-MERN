exports.createBooking = async (req, res) => {
  try {
    const {
      hotelName,
      packageName,
      checkInDate,
      checkOutDate,
      numberOfGuests,
      numberOfRooms,
      totalRoomAmount,
      bookingType,
      cardHolderName,
      cardNumber
    } = req.body;

    const serviceFee = totalRoomAmount * 0.05;
    const grandTotal = totalRoomAmount + serviceFee;

    const booking = new Booking({
      hotelName,
      packageName,
      checkInDate,
      checkOutDate,
      numberOfGuests,
      numberOfRooms,
      totalRoomAmount,
      serviceFee,
      grandTotal,
      bookingType,
      cardHolderName,
      cardNumber,
      bookingStatus: "Pending",
      paymentStatus: "Pending"
    });

    await booking.save();

    res.status(201).json({
      message: "Booking Created Successfully",
      booking
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
