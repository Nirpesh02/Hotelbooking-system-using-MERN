require("dotenv").config();
const express = require("express");
const cors = require("cors"); // Added for Frontend-Backend communication
const { connectDatabase } = require("./database/database");
const subRoutes = require("./routes/subRoutes");

const app = express();

app.use(cors()); // Allow React to call this API
app.use(express.json());

// Database connection
connectDatabase();

// Routes
app.use("/api", subRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});