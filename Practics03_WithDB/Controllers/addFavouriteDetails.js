const Favourites = require("../Models/favourite");
const Homes = require("../Models/Registered");

exports.addFavouriteDetails = (req, res, next) => {
 const homeId = req.body.id;

  Homes.findOne({ _id: homeId }).then((home) => {
    if (!home) {
      return res.redirect("/host/showHome");
    }

    return Favourites.findOne({ homeId: homeId })
      .then((result) => {
        if (result) {
          return Favourites.deleteOne({ homeId: homeId });
        }

        const { _id } = home;
        const favHome = new Favourites({ homeId: _id });
        return favHome.save();
      })
      .then(() => {
         return res.redirect(`/host/showHome/${homeId}`);
      })
      .catch((err) => {
         return res.redirect(`/host/showHome/${homeId}`);
      });
  });
};


//  const homeId = req.body.id;
  // Favourite.addFavourite(homeId)
    // .then((home) => {
    //   return res.redirect(`/host/showHome/${homeId}`);
    // })
    // .catch((err) => {
    //   return res.redirect(`/host/showHome/${homeId}`);
    // });