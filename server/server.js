// Load environment variables from a .env file
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/user.routes");
const { connectToMongoDB } = require("./connectionDB");

// Initialize express app
const app = express();
const PORT = process.env.PORT || 3000;

// CORS configuration for dev and production environments
const corsOption = {
  origin: [process.env.CLIENT_URL || "http://127.0.0.1:5173", "http://localhost:5173"],
  methods: 'GET, POST, PUT, PATCH, DELETE',
  credentials: true,
};

// Apply CORS middleware
app.use(cors(corsOption));

// Apply middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection using connection string from .env
connectToMongoDB(process.env.URL_DB);

// Route prefix for user-related routes
app.use('/api/users', userRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
