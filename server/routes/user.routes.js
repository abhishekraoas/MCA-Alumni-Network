const express = require("express");
const router = express.Router();
const userModel = require("../models/user.model");

router.get("/", (req, res) => {
  res.send("Welcome to MCA Alumni Network");
});

// Creating User Account
router.post("/alumni/signup", async (req, res) => {
    const user = new userModel(req.body);
    try {
      await user.save();
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
        const users = await userModel.find();
        res.send(users);
    } catch (err) {
        res.status(404).send("Data Not Found");
    }
});

// Get Alumni Data by ID
router.get("/alumni/:id", async(req, res) => {
    try {
        const _id = req.params.id;
        const user = await userModel.findById(_id);
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
        const user = await userModel.findByIdAndUpdate(_id);
        res.send(user);
    } catch(err){
        res.send(err)
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
