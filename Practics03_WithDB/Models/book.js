const fs = require("fs");
const path = require("path");
const RootDir = require("../Util/Path");
const RegisteredHouses = require("./Registered");
const dataPath = path.join(RootDir, "Data", "Book.json");
const mongoose = require('mongoose')



 const bookingSchema = new mongoose.Schema({

  bookHomeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Homes",
    required: true,
    unique: true,
  },

 })

 module.exports = mongoose.model('Bookings',bookingSchema);


