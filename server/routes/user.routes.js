const express = require("express");
const router = express.Router();

router.get("/", (req, res)=>{
    res.send("Welcome to MCA Alumni Network");
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

router.get("/register", (req, res)=>{
    res.send("Register to MCA Alumni Network");
})


module.exports = router;