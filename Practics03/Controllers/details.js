const Booking = require("../Models/book");
const Favourite = require("../Models/favourite");
const RegisteredHouses = require("../Models/Registered");

exports.details = (req, res, next) => {
  const homeId = req.params.homeId;

  Favourite.fetchFavourite((favouriteData) => {
    Booking.fetchBooking((allBooking) => {
      RegisteredHouses.findById(homeId, (findHome) => {
        if (!findHome) {
          res.redirect("/host/showHome");
        } else {
          res.render("details", {
            title: "Home Details",
            headerText: `Home ID: ${homeId}`,
            details: findHome,
            favouriteData: favouriteData,
             allBooking: allBooking,isLogin: req.isLogin
             
          });
        }
      });
    });
  });
};
