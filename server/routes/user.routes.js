const { log } = require("console");
const express = require("express");
const router = express.Router();
const path = require("path");
const userModel = require("../models/user.model");

console.log(path.join(__dirname, ".."));

const home = path.join(__dirname);

router.get("/", (req, res)=>{
    res.send("Welcome to MCA Alumni Network");
});

router.post("/api/users", (req, res)=>{
    console.log(req.body);
    
    res.send("Data received");
});

router.get("/api/users", (req, res)=>{
    res.send("Data sent");
});

router.get("/about", (req, res)=>{
    res.send("About MCA Alumni Network");
});

router.get("/contact", (req, res)=>{
    res.send("Contact MCA Alumni Network");
});

router.get("/services", (req, res)=>{
    res.send("Services of MCA Alumni Network");
});

router.get("/login", (req, res)=>{
    res.send("Login to MCA Alumni Network");
})

// router.get("/register", (req, res)=>{
//     res.send("Register to MCA Alumni Network");
// })


module.exports = router;