// // const Booking = require("../Models/book");
// // const Favourite = require("../Models/favourite");
// // const RegisteredHouses = require("../Models/Registered");
// const Book = require('../Models/book');
// const Favourite = require('../Models/favourite');
const Homes = require("../Models/Registered");
const Users = require("../Models/user");

exports.Registered = (req, res, next) => {
  
  const userId = req.session.user._id;

  Homes.find().then((Homes) => {
    Users.findById(userId)
      .populate("favourites")
      .populate("bookings")
      .then((user) => {
        if (!user) {
          return Promise.reject("User not found");
        }

        return res.render("Registered", {
          title: "Registered",
          headerText: "Registered Houses",
          userData: Homes,
          favouriteData: user.favourites,
          bookedData: user.bookings,
          isLogin: req.session.isLogin,
          user: req.session.user,
        });
      });
  });

  // return Favourite.fetchFavourite().then((favouriteData) => {

  // });

  // Favourite.fetchFavourite((favouriteData) => {
  //   Booking.fetchBooking((bookedData) => {

  //   });
  // });
};
