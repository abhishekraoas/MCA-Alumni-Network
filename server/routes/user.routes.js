const express = require("express");
const router = express.Router();

router.get("/", (req, res)=>{
    return console.log("Welcome to MCA Alumni Network");
});

module.exports = router;