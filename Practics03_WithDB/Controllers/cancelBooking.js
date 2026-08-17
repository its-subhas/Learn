const Booking = require("../Models/book");

exports.CancelBooking = (req, res, next) => {
  const homeId = req.body.id;
  
  Booking.deleteOne({ bookHomeId: homeId })
    .then(() => {
      res.redirect("/user/booking");
    })
    .catch((err) => {
 
      res.redirect("/user/booking");
    });
};


