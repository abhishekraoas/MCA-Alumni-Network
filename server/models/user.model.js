const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: [true, "Email already exist"],
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email");
      }
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

  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

//Generating Token
userSchema.methods.generateAuthToken = async function () {
  try {
    const token = jwt.sign(
      { _id: this._id.toString() },
      process.env.SECRET_KEY
    );
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (err) {
    res.send(err);
    console.log(err);
  }
};

//Hashing Password
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    //  const hashPassword = await bcrypt.hash(password, 10);
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

//Model
const User = mongoose.model("User", userSchema);
module.exports = User;
