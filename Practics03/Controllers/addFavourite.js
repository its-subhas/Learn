const Favourite = require("../Models/favourite");

exports.addFavourite = (req, res, next) => {
  const homeId = req.body.id;
  Favourite.addFavourit(homeId, (info) => {
    if (info) {
      res.redirect("/host/showHome");
    } else {
      res.redirect("/host/showHome");
    }
  });
};
