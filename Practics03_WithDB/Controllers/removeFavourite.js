const User = require("../Models/user");
const Home = require("../Models/Registered");

exports.removeFavourite = (req, res, nex) => {
  const homeId = req.body.id;
  const userId = req.session.user._id;

  Home.findById(homeId)
    .then((favHome) => {
      if (!favHome) {
        throw new Error("Home not found");
      }
      return User.findById(userId).then((user) => {
        if (!user) {
          throw new Error("User not found");
        }

        if (!user.favourites.includes(favHome._id)) {
          throw new Error("Favourite not found");
        }

        user.favourites = user.favourites.filter(
          (id) => id.toString() !== favHome._id.toString(),
        );
        return user.save().then((save) => {
          if (!save) {
            throw new Error("Favourite not save");
          }
          return res.redirect("/user/favourite");
        });
      });
    })
    .catch((err) => {
      return res.redirect("/user/favourite");
    });
};
