const Favourite = require("../Models/favourite");

exports.removeFavourite = (req, res, nex) => {
  const homeId = req.body.id;

  Favourite.removeFavourite(homeId, (info) => {
    if (info) {
      res.redirect("/user/favourite");
    } else {
      res.redirect("/user/favourite");
    }
  });
};
