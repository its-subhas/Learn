const RegisteredHouses = require("../Models/Registered");

exports.editSubmited = (req, res, next) => {
  const homeId = req.params.homeId;
  const { houseName, owner, location, rent, bedrooms, description, available } =
    req.body;
  const Data = new RegisteredHouses(
    houseName,
    owner,
    location,
    rent,
    bedrooms,
    description,
    available,
  );

  RegisteredHouses.saveEdit(homeId, Data, (info) => {
    if (info) {
      res.redirect("/host/showHome");
    } else {
      res.redirect("/host/showHome");
    }
  });
};
