const Path = require("path");
const fs = require("fs");
const RootDir = require("../Util/Path");
const Homes = require("../Models/Registered");

exports.editSubmited = (req, res, next) => {
  const homeId = req.params.homeId;

  const {
    houseName,
    owner,
    location,
    rent,
    bedrooms,
    description
  } = req.body;

  const available = req.body.available || "";

  const Data = {
    houseName,
    owner,
    location,
    rent,
    bedrooms,
    description,
    available
  };

  // First find existing house
  Homes.findById(homeId)
    .then((home) => {

      if (!home) {
        return res.redirect("/host/showHome");
      }

      // If user uploaded a NEW photo
      if (req.file) {

        // Save new photo
        Data.housePhoto = "/uploads/" + req.file.filename;

        // Delete OLD photo
        if (home.housePhoto) {

          const oldPhotoPath = Path.join(
            RootDir,
            "Public",
            "uploads",
            Path.basename(home.housePhoto)
          );

          fs.unlink(oldPhotoPath, (err) => {
            if (err && err.code !== "ENOENT") {
              console.log("Error deleting old photo:", err);
            } else {
              console.log("Old photo deleted successfully!");
            }
          });
        }
      }

      // Update database
      return Homes.updateOne(
        { _id: homeId },
        { $set: Data }
      );
    })
    .then((result) => {

      if (!result) {
        return;
      }

      if (result.matchedCount === 0) {
        return res.redirect("/");
      }

      res.redirect("/host/showHome");
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/host/showHome");
    });
};