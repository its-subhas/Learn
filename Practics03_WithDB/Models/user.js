const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },

  lastname: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  usertype: {
    type: String,
    enum: ["guest", "admin"],
    default: "guest",
    required: true,
  },

  terms: {
    type: String,
    required: true,
  },

  favourites: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Homes"
  }],

  bookings: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Homes"
  }]
});

module.exports = mongoose.model("Users", userSchema);