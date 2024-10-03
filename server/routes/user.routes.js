const express = require("express");
const router = express.Router();
const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const {handleUserSignUp, handleUserLogin, updateUserById, deleteUserById} = require("../controllers/user.controllers");
const jwt = require("jsonwebtoken");

// const creatToken = async ()=>{
//   const token = await jwt.sign({ _id: '66e7477faca79561d3fc4e10'}, 'hello',{
//     expiresIn: '2 minute'
//   });
//   console.log(token);
//   const userVerify = await jwt.verify(token, "hello");
//   console.log(userVerify);
// }

router.get("/", (req, res) => {
  res.send("Welcome to MCA Alumni Network");
});

// Creating User Account
router.post("/alumni/register", handleUserSignUp);

// Login User Account
router.post("/alumni/login", handleUserLogin);

// Update Alumni Data
router.patch("/alumni/:id", updateUserById)

// Delete Alumni Data
router.delete("/alumni/:id", deleteUserById);

// Get Alumni Data
router.get("/alumni", async (req, res) => {
  try {
    const users = await userModel.find().sort({ rollNo: 1 });
    res.send(users);
  } catch (err) {
    res.status(404).send("Data Not Found");
  }
});

// Get Alumni Data by ID
router.get("/alumni/:id", async (req, res) => {
  try {
    const rollNo = req.params.id;
    const user = await userModel.findOne({ rollNo: rollNo });
    if (!user) {
      return res.status(404).send("user doesn't exists");
    } else {
      res.send(user);
    }
  } catch (err) {
    res.status(404).send(err);
  }
});

//Log Out
router.get("/alumni/logout", (req, res) => {
  try {
    res.clearCookie("jwt");
    res.send("Logged Out");
    
  } catch (err) {
    res.status(500).send(err);
  }
  
  
});


module.exports = router;
