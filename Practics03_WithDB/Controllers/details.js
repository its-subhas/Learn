const User = require("../Models/user");
const Home = require("../Models/Registered");

exports.details = (req, res, next) => {
  const homeId = req.params.homeId;
  const userId = req.session.user._id;

  Promise.all([
    Home.findById(homeId),
    User.findById(userId).populate("favourites").populate("bookings"),
  ])

    .then(([home, user]) => {
      if (!home) {
        throw new Error("Home not found");
      }

      if (!user) {
        throw new Error("User not found");
      }

      return res.render("details", {
        title: "Home Details",
        headerText: `Home: ${home.houseName}`,

        details: home,

        favouriteData: user.favourites,

        allBooking: user.bookings,

        isLogin: req.session.isLogin,
      });
    })

    .catch((err) => {
      console.log(err);

      return res.redirect("/host/showHome");
    });
};
