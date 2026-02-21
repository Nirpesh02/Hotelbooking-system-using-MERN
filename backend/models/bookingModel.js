const bookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

  hotelName: String,
  packageName: String,

  checkInDate: Date,
  checkOutDate: Date,

  numberOfGuests: Number,
  numberOfRooms: Number,

  totalRoomAmount: Number,
  serviceFee: Number,
  grandTotal: Number,

  bookingType: {
    type: String,
    enum: ["Card", "eSewa", "Khalti"]
  },

  cardHolderName: String,
  cardNumber: String,

  transactionId: String,

  bookingStatus: {
    type: String,
    default: "Pending"
  },

  paymentStatus: {
    type: String,
    default: "Pending"
  }

}, { timestamps: true });
