require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connectDatabase } = require("./database/database");
const subRoutes = require("./routes/subRoutes");
const reviewRoutes = require("./routes/reviewRoutes");


const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", subRoutes);
app.use("/api", reviewRoutes);

// Start Server AFTER DB connects
const startServer = async () => {
  try {
    await connectDatabase();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
  }
};

startServer();
