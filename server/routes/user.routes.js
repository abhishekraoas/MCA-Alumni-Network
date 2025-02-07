const express = require('express')
const router = express.Router()
const multer = require('multer')
const { storage } = require('../config/uploadPhoto.config')
const upload = multer({ storage })

// const bcrypt = require("bcryptjs");
const {
  handleUserSignUp,
  handleUserLogin,
  updateUserById,
  deleteUserById,
  logoutUser,
  getAlumniById,
  Sendcontactmail,
  getAllUsers,
} = require('../controllers/user.controllers')

// Get All Alumni Data
router.get('/api/alumni', getAllUsers)

// Creating User Account
router.post('/alumni/register', upload.single('profilePhoto'), handleUserSignUp)

// Contact Us
router.post('/contactus', Sendcontactmail)

// Login User Account
router.post('/alumni/login', handleUserLogin)

// Update Alumni Data
router.patch('/alumni/:id', updateUserById)

// Delete Alumni Data
router.delete('/alumni/:id', deleteUserById)

// Get Alumni Data by ID
router.get('/alumni/:id', getAlumniById)

//Log Out
router.get('/alumni/logout', logoutUser)

module.exports = router
