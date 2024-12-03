// authController.js
const userModel = require('../models/user.model')
const bcrypt = require('bcryptjs')
const logger = require('../logger')
const nodemailer = require('nodemailer')
const multer = require('multer')
const { storage } = require('./upload.controllers')
const upload = multer({ storage })

// Creating User Account
const handleUserSignUp = async (req, res) => {
  const user = req.body
  try {
    // Check if email already exists
    const existingEmail = await userModel.findOne({
      email: { $eq: user.email },
    })
    if (existingEmail) {
      logger.warn(`Signup attempt failed: Email already exists - ${user.email}`)
      return res.status(400).json({ message: 'Email already exists' })
    }

    // Check if roll number already exists
    const existingRollNo = await userModel.findOne({
      rollNo: { $eq: user.rollNo },
    })
    if (existingRollNo) {
      logger.warn(
        `Signup attempt failed: Roll number already exists - ${user.rollNo}`,
      )
      return res.status(400).json({ message: 'Roll number already exists' })
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(user.password, 10)

    // Create new user
    const newUser = new userModel({ ...user, password: hashedPassword })
    await newUser.save()

    logger.info(`New user registered: ${newUser?.email}`)
    // Send success response
    res.status(201).json({
      message: 'User registered successfully',
      newUser,
      token: await newUser.generateAuthToken(),
      userId: newUser._id.toString(),
    })
  } catch (err) {
    console.log(err, '###')
    logger.error(`Error during registration for ${user.email}: ${err.message}`)
    res.status(500).json({ message: 'Server error' })
  }
}

// Login User Account
const handleUserLogin = async (req, res) => {
  const { email, password } = req.body

  try {
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: 'Email and password are required' })
    }

    const userExist = await userModel.findOne({ email })

    if (!userExist) {
      logger.warn("Failed login attempt: User doesn't exist")
      return res.status(401).json({ message: 'Invalid credentials' })
    }

    const isMatch = await bcrypt.compare(password, userExist.password)

    if (isMatch) {
      const token = await userExist.generateAuthToken()
      logger.info('User Login successfully')
      return res.status(200).json({
        message: 'Login Successfully',
        user: { email: userExist.email },
        token,
        userId: userExist._id.toString(),
      })
    } else {
      logger.warn('Failed login attempt: Invalid credentials')
      return res.status(401).json({ message: 'Invalid credentials' })
    }
  } catch (err) {
    logger.error('Error during login: ${err.message}')
    return res.status(500).json({ message: 'Server error' })
  }
}

// Update Alumni Data
async function updateUserById(req, res) {
  try {
    const rollNo = req.params.id
    const user = await userModel.findOneAndUpdate({ rollNo }, req.body, {
      new: true,
    })

    logger.info(`User data updated for Roll No: ${rollNo}`)
    res.send(user)
  } catch (err) {
    logger.error(
      `Error updating user with Roll No: ${req.params.id}: ${err.message}`,
    )
    res.status(404).send(err)
  }
}

// Delete Alumni Data
async function deleteUserById(req, res) {
  try {
    const rollNo = req.params.id
    const user = await userModel.findOneAndDelete({ rollNo })
    if (!user) {
      logger.warn(
        `Delete attempt failed: User doesn't exist with Roll No: ${rollNo}`,
      )
      return res.status(404).send("User doesn't exist")
    }

    logger.info(`User deleted: Roll No - ${rollNo}`)
    res.send(user)
  } catch (err) {
    logger.error(
      `Error deleting user with Roll No: ${req.params.id}: ${err.message}`,
    )
    res.status(404).send(err)
  }
}

// Get Alumni By Roll No
async function getAlumniById(req, res) {
  try {
    const rollNo = req.params.id
    const user = await userModel.findOne({ rollNo })
    if (!user) {
      logger.warn(
        `Get attempt failed: User doesn't exist with Roll No: ${rollNo}`,
      )
      return res.status(404).send("User doesn't exist")
    }

    logger.info(`User data retrieved: Roll No - ${rollNo}`)
    res.send(user)
  } catch (err) {
    logger.error(
      `Error retrieving user with Roll No: ${req.params.id}: ${err.message}`,
    )
    res.status(404).send(err)
  }
}

//Get all users
async function getAllUsers(req, res) {
  try {
    const users = await userModel.find()
    logger.info(`All users retrieved`)
    res.send(users)
  } catch (err) {
    logger.error(`Error retrieving users: ${err.message}`)
    res.status(500).send(err)
  }
}

// Logout User
async function logoutUser(req, res) {
  try {
    res.clearCookie('jwt')
    logger.info(`User logged out: ${req.user?.email || 'Unknown user'}`)
    res.send('Logged Out')
  } catch (err) {
    logger.error(`Error during logout: ${err.message}`)
    res.status(500).send(err)
  }
}

async function Sendcontactmail(req, res) {
  const { name, email, message } = req.body
  console.log(req.body)
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    const mailOptions = {
      from: email,
      to: 'mmmutmca@gmail.com',
      subject: `Contact Us Message from ${name}`,
      text: message,
      html: `
        <p>You have received a new message from the Contact Us form:</p>
        <h3>Contact Details:</h3>
        <ul>
          <li>Name: ${name}</li>
          <li>Email: ${email}</li>
        </ul>
        <h3>Message:</h3>
        <p>${message}</p>
      `, // HTML body
    }

    await transporter.sendMail(mailOptions)

    return res
      .status(200)
      .json({ success: true, message: 'Message sent successfully!' })
  } catch (error) {
    console.error('Error sending email:', error)

    return res
      .status(500)
      .json({ success: false, message: 'Error sending email' })
  }
}

module.exports = {
  handleUserSignUp,
  handleUserLogin,
  updateUserById,
  deleteUserById,
  getAlumniById,
  getAllUsers,
  logoutUser,
  Sendcontactmail,
}
