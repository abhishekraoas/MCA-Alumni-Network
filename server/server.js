// Load environment variables from a .env file
require('dotenv').config()

const express = require('express')
const cors = require('cors')
const helmet = require('helmet') // Import Helmet for security
const userRouter = require('./routes/user.routes')
const mongoose = require('mongoose') // Initialize express app
const app = express()

// Define the port, use the one from environment variables or default to 3000
const PORT = process.env.PORT || 3000

const connectToMongoDB = async (url) => {
  try {
    await mongoose.connect(url)
    console.log('Connected to MongoDB successfully.')
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error.message)
    process.exit(1)
  }
}

// CORS configuration for dev and production environments
const corsOptions = {
  origin: [
    process.env.CLIENT_URL || 'http://127.0.0.1:5173',
    'http://localhost:5173',
  ],
  methods: 'GET, POST, PUT, PATCH, DELETE',
  credentials: true,
}

// Apply CORS middleware with specified options
app.use(cors(corsOptions))

/**
 * Enhance Security with Helmet Middleware
 * Helmet helps secure Express apps by setting various HTTP headers.
 */
app.use(helmet())

/**
 * Middleware Setup:
 * 1. express.json(): Parses incoming requests with JSON payloads.
 * 2. express.urlencoded(): Parses incoming requests with URL-encoded payloads.
 */
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Mount the user router on the /api/users path
app.use('/', userRouter)

/**
 * Health Check Endpoint
 * Useful for monitoring and ensuring the application is running correctly.
 */
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' })
})

/**
 * Database Connection and Server Start
 * Connect to MongoDB before starting the server to ensure the application
 * only runs when the database connection is successful.
 */
const startServer = async () => {
  try {
    await connectToMongoDB(process.env.URL_DB)
    app.listen(PORT, () => {
      console.log(`App is listening on port ${PORT}`)
    })
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error.message)
    process.exit(1) // Exit the process with failure
  }
}

// Start the server
startServer()
