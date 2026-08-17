const { ObjectId } = require("mongodb");
const Favourites = require("../Models/favourite");
const Homes = require("../Models/Registered");
const Booking = require("../Models/book");

exports.del = (req, res, next) => {
  const homeId = req.params.homeId;
  Booking.deleteOne({ bookHomeId: homeId })
    .then(() => {
      return Favourites.deleteOne({ homeId: homeId })
        .then(() => {
          return Homes.deleteOne({ _id: new ObjectId(homeId) });
        })
        .then(() => {
          return res.redirect("/host/showHome");
        });
    })
    .catch((err) => {
      return res.redirect("/host/showHome");
    });
};
