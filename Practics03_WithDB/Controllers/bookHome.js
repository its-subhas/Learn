const Booking = require("../Models/book");

exports.bookHome = (req, res, next) => {
  const homeId = req.params.homeId;

  let booked = new Booking({ bookHomeId: homeId });
  booked
    .save()
    .then(() => {
      return res.redirect("/host/showHome");
    })
    .catch((err) => {
      return res.redirect("/host/showHome");
    });
};
