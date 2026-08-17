const RegisteredHouses = require("../Models/Registered");

exports.del = (req, res, next) => {
  const homeId = req.params.homeId;

  RegisteredHouses.deleteHome(homeId, (info) => {
    if (info) {
      res.redirect("/host/showHome");
    } else {
      res.redirect("/host/showHome");
    }
  });
};
