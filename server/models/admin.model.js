const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define collection and schema for Admin
let Admin = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },
  },
  
  { collection: "admin" }
);

module.exports = mongoose.model("Admin", Admin);
