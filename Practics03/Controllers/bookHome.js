const Booking = require("../Models/book");

exports.bookHome = (req, res, next) => {
  const homeId = req.params.homeId;
  Booking.addBooking(homeId, (info) => {
   if (info) {
    res.redirect("/host/showHome")
   } else {
     res.redirect("/user/booking")
   }
  });
};
