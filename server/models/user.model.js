const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true, // Ensure email is unique
      validate: {
        validator: (value) => validator.isEmail(value),
        message: "Invalid Email",
      },
    },

    password: {
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
      required: true,
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
      required: true,
    },

    currentCompany: {
      type: String,
      required: true,
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

    profilePhoto: {
      type: String,
      required: true,
      default: "../public/profile.png",
    },

    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

// Generating Token
userSchema.methods.generateAuthToken = async function () {
  try {
    const token = jwt.sign(
      { _id: this._id.toString() },
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
    );
    this.tokens = this.tokens.concat({ token });
    await this.save();
    return token;
  } catch (err) {
    console.error("Error generating token:", err);
    throw new Error("Error generating token");
  }
};

// Model
const User = mongoose.model("User", userSchema);
module.exports = User;
