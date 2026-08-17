const Favourite = require("../Models/favourite");

exports.addFavouriteDetails = (req, res, next) => {
  const homeId = req.body.id;
  Favourite.addFavourit(homeId, (info) => {
    if (info) {
      res.redirect(`/host/showHome/${homeId}`);
    } else {
      res.redirect(`/host/showHome/${homeId}`);
    }
  });
};
