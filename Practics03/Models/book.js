const fs = require("fs");
const path = require("path");
const RootDir = require("../Util/Path");
const RegisteredHouses = require("./Registered");
const dataPath = path.join(RootDir, "Data", "Book.json");

module.exports = class Booking {
  static fetchBooking(bookedData) {
    fs.readFile(dataPath, (err, data) => {
      if (err) {
        return bookedData([]);
      } else {
        return bookedData(JSON.parse(data));
      }
    });
  }

  static addBooking(homeId, info) {
    this.st = "booked";
    RegisteredHouses.fetchAll((callback) => {
      this.fetchBooking((bookedData) => {
        if (bookedData.find((home) => home.id === homeId)) {
          return info();
        }

        const bookHome = callback.find((home) => home.id === homeId);

        bookHome.st = this.st;
        bookedData.push(bookHome);

        fs.writeFile(dataPath, JSON.stringify(bookedData), (err) => {
          !err ? info() : info(err);
        });
      });
    });
  }

  static removeBooking(homeId, info) {
    this.fetchBooking((bookedData) => {
      if (!bookedData.find((home) => home.id === homeId)) {
        return info();
      }
      const newBookedData = bookedData.filter((home) => home.id !== homeId);
      fs.writeFile(dataPath, JSON.stringify(newBookedData), (err) => {
        !err ? info() : info(err);
      });
    });
  }
};
