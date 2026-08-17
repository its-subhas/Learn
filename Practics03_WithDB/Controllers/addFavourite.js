const Homes = require("../Models/Registered");
const User = require("../Models/user");

exports.addFavourite = (req, res, next) => {


  const homeId = req.body.id;
  const userId = req.session.user._id;
 
  Homes.findById(homeId)
    .then((favHome) => {
      if (!favHome) {
        throw new Error("Home not found");
      }

      return User.findById(userId).then((user) => {
        if (!user) {
          throw new Error("User not found");
        }

        if (!user.favourites.includes(favHome._id)) {
          user.favourites.push(favHome._id);
          return user.save();
        } else {
          user.favourites = user.favourites.filter((id) => id.toString() !== favHome._id.toString());
          return user.save();
        }
      });
    })
    .then(() => {
      return res.redirect("/host/showHome");
    })
    .catch((err) => {
      console.log(err)
      return res.redirect("/host/showHome");
    });
};


