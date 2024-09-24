const userModel = require("../models/user.model");
const jwt = require('jsonwebtoken');
const auth = require("../middlewares/auth.middlewares");



// Creating User Account
async function handleUserSignUp(req, res) {
    try {

        const user = new userModel(req.body);

        //   {
          
        //   fullname: req.body.fullname,
        //   email: req.body.email,
        //   password: req.body.password,
        //   linkedin: req.body.linkedin,
        //   github: req.body.github,
        //   passOutYear: req.body.passOutYear,
        //   rollNo: req.body.rollNo,
        //   jobRole: req.body.jobRole,
        //   currentCompany: req.body.currentCompany,
        //   gender: req.body.gender,
        //   city: req.body.city,
        //   state: req.body.state,
        // });
     
        const token = await user.generateAuthToken();
        const userData = await user.save();
        res.status(201).send(user);
        console.log("User Account Created Successfully");
      } catch (err) {
        res.send(err);
        res.status(400).send("Unable to save data");
      }
}

// Login User Account
async function handleUserLogin(req, res) {
    try {
        const {email,password} = req.body;
        const user = await userModel.findOne({email});
        const isMatch = await bcrypt.compare(password, user.password);
        const token = await user.generateAuthToken();
        
        if (isMatch) {
          res.send("Login Successfull");
          console.log(user);
          
        } else { 
          res.send("Password Invalid");
        }
      } catch (err) {
        res.status(400).send("Invalid Credentials");
      }
}

// Update Alumni Data
async function updateUserById(req, res) {
    try {
        const _id = req.params.id;
        const user = await userModel.findByIdAndUpdate(_id, req.body, {
          new: true,
        });
        res.send(user);
        console.log("user updated successfully");
      } catch (err) {
        res.status(404).send(err);
      }
}

// Delete Alumni Data
async function deleteUserById(req, res) {
    try {
        // const _id = req.params.id;
        const user = await userModel.findByIdAndDelete(req.params.id);
        if (!user) {
          return res.status(404).send("user doesn't exists");
        } else {
          res.send(user);
          console.log("user deleted successfully");
        }
      } catch (err) {
        res.status(404).send(err);
      }
}



module.exports = {
    handleUserSignUp,
    handleUserLogin,
    updateUserById,
    deleteUserById
}