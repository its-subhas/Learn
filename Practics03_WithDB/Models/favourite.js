const mongoose = require("mongoose");

const favouriteSchema = new mongoose.Schema({
  homeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Homes",
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("Favourites", favouriteSchema);
