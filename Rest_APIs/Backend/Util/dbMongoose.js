const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const mongoose = require("mongoose");

const DB = "Todo";
const URL = `mongodb+srv://:@mern-db.sypsrxp.mongodb.net/${DB}?appName=MERN-DB`;

const MongooseConnect = async (callback) => {
  try {
    const instance = await mongoose.connect(URL);
    console.log("Connected !");
    callback(instance);
  } catch (err) {
    console.log("Connection Failed !");
    console.log(err);
  }
};

exports.MongooseConnect = MongooseConnect;
