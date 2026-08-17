const Booking = require("../Models/book");

exports.booking = (req, res, next) => {
  Booking.fetchBooking((userData) => {
    res.render("booking", {
      title: "Booking",
      headerText: "All Bookings",
      userData: userData,
      isLogin: req.isLogin
    });
  });
};
