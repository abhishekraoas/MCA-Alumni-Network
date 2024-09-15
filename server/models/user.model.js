const mongoose = require("mongoose");
const validator = require("validator");
const userSchema = new mongoose.Schema({

    fullName : {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
        },
    
    password:{
        type: String,
        required: true,
        minlength: 6,
    },

    linkedin: {
      type: String,
      required: true,
    },

    github: {
        type: String,
      },

      passOutYear: {
        type: Number,
        required: true,
      },
    
      rollNo: {
        type: Number,
        required: true,
        unique: true,
    },

    jobRole: {
      type: String,
    },

    currentCompany: {
      type: String,
    },

    gender: {
      type: String,
      required: true,
    },

    city: {
      type: String,
      required: true,
    },

    state: {
      type: String,
      required: true,
    },

    // profilePhoto: {
    //   type: String,
    //   required: true,
    //   default: '/images/avatar.png',     
    // }

})


//Model
const User = mongoose.model("user", userSchema);
module.exports = User;