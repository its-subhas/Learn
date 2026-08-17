const Booking = require("../Models/book");
const Homes = require("../Models/Registered");

exports.booking = (req, res, next) => {

  Booking.find().populate("bookHomeId")
    .then((homes) => {
      
      
      // const bookingId = homesId.map((id) => id.homeId.toString());
      // return Homes.find().then((homes) => {
      //   const bookingHomes = homes.filter((home) => bookingId.includes(home._id.toString()));



        return res.render("booking", {
          title: "Booking",
          headerText: "All Bookings",
          userData: homes,
          isLogin: req.isLogin,
        });
      })
    .catch(() => {
      return res.redirect("/host/showHome");
    });
};
