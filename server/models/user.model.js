const mongoose = require("mongoose");

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
    },

    gender: {
      type: String,
      required: true,
    },

    linkedin: {
      type: String,
      required: true,
    },

    github: {
        type: String,
      },
    
    jobRole: {
      type: String,
    },

    currentCompany: {
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

    state: {
      type: String,
      required: true,
    },

    district: {
      type: String,
      required: true,
    },

    profilePhoto: {
      type: String,
      required: true,
      default: '/images/avatar.png',     
    }

})


//Model
const User = mongoose.model("user", userSchema);
module.exports = User;