// Load environment variables from a .env file
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRouter = require("./routes/user.routes");
const { connectToMongoDB } = require("./connectionDB");

// Initialize express app
// Define the port, use the one from environment variables or default to 3000
const app = express();
const PORT = process.env.PORT || 3000;

// CORS configuration
// Allow requests from localhost:5173 (development environment)
// In production, update the origin to the deployed URL
const corsOption = {
  origin: process.env.CLIENT_URL || "http://localhost:5173",
  credentials: true,
};

// Apply CORS middleware with specified options
app.use(cors(corsOption));

/**
 * Middleware Setup:
 * 1. express.urlencoded(): Parses incoming requests with urlencoded payloads.
 * 2. bodyParser.json(): Parses incoming requests with JSON payloads.
 * 3. bodyParser.urlencoded(): Parses incoming requests with x-www-form-urlencoded payloads.
 */
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

/**
 * Database Connection:
 * Connects to the MongoDB instance using the connection string from environment variables.
 * The connection string (URL_DB) should be configured in the .env file for production use.
 */
connectToMongoDB(process.env.URL_DB);


app.use(userRouter);
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
