const fs = require("fs");
const path = require("path");
const rootDir = require("../Util/Path");
const dataPath = path.join(rootDir, "Data", "Favourite.json");

module.exports = class Favourite {
  static addFavourit(homeId, info) {
    Favourite.fetchFavourite((favouriteData) => {
      if (favouriteData.includes(homeId)) {
        const newFavouriteData = favouriteData.filter((id) => id !== homeId);

        fs.writeFile(dataPath, JSON.stringify(newFavouriteData), (err) => {
          if (err) {
            return info(err);
          }
          return info();
        });
      } else {
        favouriteData.push(homeId);
        fs.writeFile(dataPath, JSON.stringify(favouriteData), (err) => {
          if (err) {
            return info(err);
          }
          return info();
        });
      }
    });
  }

  static removeFavourite(homeId, info) {
    Favourite.fetchFavourite((favouriteData) => {
      if (!favouriteData.includes(homeId)) {
        return info();
      }

      const newFavouriteData = favouriteData.filter((id) => id !== homeId);

      fs.writeFile(dataPath, JSON.stringify(newFavouriteData), (err) => {
        if (err) {
          return info(err);
        }
        return info();
      });
    });
  }

  static fetchFavourite(favouriteData) {
    fs.readFile(dataPath, (err, data) => {
      if (err) {
        favouriteData([]);
      } else {
        favouriteData(JSON.parse(data));
      }
    });
  }
};
