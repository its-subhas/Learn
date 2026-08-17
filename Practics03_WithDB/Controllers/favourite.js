const User = require("../Models/user");

exports.favourite = (req, res, next) => {
  const userId = req.session.user._id;

  User.findById(userId)
    .populate("favourites")
    .populate("bookings")
    .then((user) => {
      if (!user) {
        throw new Error("User not found");
      }

      return res.render("favourite", {
        title: "Favourite",
        headerText: "Welcome to Favourite",
        userData: user.favourites,
        allBooking: user.bookings,
        isLogin: req.session.isLogin,
      });
    })
    .catch((err) => {
      return res.redirect("/host/showHome");
    });
}; 