const Booking = require("../Models/book");

exports.CancelBooking = (req, res, next) => {
  const homeId = req.body.id;

  Booking.removeBooking(homeId, (info) => {
    if (info) {
      res.redirect("/user/booking");
    } else {
      res.redirect("/user/booking");
    }
  });
};
