const express = require("express");
const router = express.Router();
const userModel = require("../models/user.model");

router.get("/", (req, res) => {
  res.send("Welcome to MCA Alumni Network");
});

// Creating User Account
router.post("/alumni/signup", async (req, res) => {
    
    try {
      
        const user = new userModel({
        fullname: req.body.fullname,
        email: req.body.email,
        password: req.body.password,
        linkedin: req.body.linkedin,
        github: req.body.github,
        passOutYear: req.body.passOutYear,
        rollNo: req.body.rollNo,
        jobRole: req.body.jobRole,
        currentCompany: req.body.currentCompany,
        gender: req.body.gender,
        city: req.body.city,
        state: req.body.state,
        });

      const userData = await user.save();
      res.status(201).send(user);
      console.log("User Account Created Successfully");
    } catch (err) {
      res.send(err);
      res.status(400).send("Unable to save data");
    }
  });

// Get Alumni Data
router.get("/alumni", async(req, res) => {
    try {
        const users = await userModel.find().sort({"rollNo":1});
        res.send(users);
    } catch (err) {
        res.status(404).send("Data Not Found");
    }
});

// Get Alumni Data by ID
router.get("/alumni/:id", async(req, res) => {
    try {
        const rollNo = req.params.id;
        const user = await userModel.findOne({rollNo:rollNo});
        if (!user) {
            return res.status(404).send("user doesn't exists");
        } else {
            res.send(user);
        }
    } catch(err){
        res.status(404).send(err);
    }
});

// Update Alumni Data
router.patch("/alumni/:id", async(req, res) => {
    try {
        const _id = req.params.id;
        const user = await userModel.findByIdAndUpdate(_id, req.body,{
            new: true
        });
        res.send(user);
        console.log("user updated successfully");
        
    } catch(err){
        res.status(404).send(err);
    }
});

// Delete Alumni Data
router.delete("/alumni/:id", async(req, res) => {
    try {
        // const _id = req.params.id;
        const user = await userModel.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).send("user doesn't exists");
        } else {
            res.send(user);
            console.log("user deleted successfully");
            
        }
    } catch(err){
        res.status(404).send(err);
    }
});;

router.get("/alumni/login", (req, res) => {
  res.send("Login to MCA Alumni Network");
});



module.exports = router;
