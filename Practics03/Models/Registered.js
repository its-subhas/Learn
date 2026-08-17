const fs = require("fs");
const path = require("path");
const rootDir = require("../Util/Path");
const dataPath = path.join(rootDir, "Data", "Data.json");
const Favourite = require("./favourite");

module.exports = class RegisteredHouses {
  constructor(
    houseName,
    owner,
    location,
    rent,
    bedrooms,
    description,
    available,
  ) {
    this.houseName = houseName;
    this.owner = owner;
    this.location = location;
    this.rent = rent;
    this.bedrooms = bedrooms;
    this.description = description;
    this.available = available;
  }

  save() {
    this.id = Math.random().toString();
    RegisteredHouses.fetchAll((userData) => {
      userData.push(this);

      fs.writeFile(dataPath, JSON.stringify(userData), (err) => {
        if (err) {
          console.error("Something Went Wrong!", err);
        } else {
          console.log("Data saved successfully.");
        }
      });
    });
  }

  static saveEdit(homeId, data, info) {
    RegisteredHouses.fetchAll((userData) => {
      const newUserData = userData.filter((home) => home.id !== homeId);

      data.id = homeId;
      newUserData.push(data);

      fs.writeFile(dataPath, JSON.stringify(newUserData), (err) => {
        if (err) {
          return info(err);
        }
        info();
      });
    });
  }

  static fetchAll(callback) {
    fs.readFile(dataPath, (err, data) => {
      callback(!err ? JSON.parse(data) : []);
    });
  }

  static findById(homeId, callback) {
    this.fetchAll((homes) => {
      const foundHome = homes.find((home) => home.id === homeId);
      callback(foundHome);
    });
  }

  static deleteHome(homeId, info) {
    this.fetchAll((allHomes) => {
      if (!allHomes.find((home) => home.id === homeId)) {
        return info();
      }

      const newHomes = allHomes.filter((home) => home.id !== homeId);
      fs.writeFile(dataPath, JSON.stringify(newHomes), (err) => {
        if (err) {
          return info(err);
        }
        Favourite.removeFavourite(homeId, (faverr) => {
          if (faverr) {
            return info(faverr);
          }

          const Booking = require("./book"); // move here beacuse its create circular dependency.
          Booking.removeBooking(homeId, (remerr) => {
            if (remerr) {
              return info(remerr);
            }
            info();
          });
        });
      });
    });
  }
};
