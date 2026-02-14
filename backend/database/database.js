const mongoose = require("mongoose");

exports.connectDatabase = async () => {
  try {
    console.log("Connecting to MongoDB...");

    await mongoose.connect(process.env.DATABASE_URL);

    console.log("Database is connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }
};
