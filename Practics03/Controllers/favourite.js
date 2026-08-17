const Booking = require("../Models/book");
const Favourite = require("../Models/favourite");
const RegisteredHouses = require("../Models/Registered");

exports.favourite = (req, res, next) => {
  RegisteredHouses.fetchAll((userData) => {
    Favourite.fetchFavourite((favouriteData) => {
      Booking.fetchBooking((allBooking) => {
        const favouriteHomes = userData.filter((home) =>
          favouriteData.includes(home.id),
        );

        res.render("favourite", {
          title: "Favourite",
          headerText: "Welcome to Favourite",
          userData: favouriteHomes,
          allBooking: allBooking,isLogin: req.isLogin
        });
      });
    });
  });
};
