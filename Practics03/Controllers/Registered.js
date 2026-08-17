const Booking = require("../Models/book");
const Favourite = require("../Models/favourite");
const RegisteredHouses = require("../Models/Registered");

exports.Registered = (req, res, next) => {
  RegisteredHouses.fetchAll((userData) => {
    Favourite.fetchFavourite((favouriteData) => {
      Booking.fetchBooking((bookedData) => {
        res.render("Registered", {
          title: "Registered",
          headerText: "Registered Houses",
          userData: userData,
          favouriteData: favouriteData,
          bookedData: bookedData,isLogin: req.isLogin
          
        });
        
      });
    });
  });
};
