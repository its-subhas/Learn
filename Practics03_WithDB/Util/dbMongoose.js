const session = require('express-session')
const mongoDBStore = require("connect-mongodb-session")(session);




const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const mongoose = require("mongoose");

const DB = "MongooseHomes"
const URL = `mongodb+srv://:@mern-db.sypsrxp.mongodb.net/${DB}?appName=MERN-DB`;



const store = new mongoDBStore({
  uri: URL,
  collection: 'session'
})


const MongooseConnect = (callback)=>{

  mongoose.connect(URL).then((client)=>{
    console.log("Connected !");
    callback(client);
  }).catch((err)=>{
    console.log("Connection Failed !");
    console.log(err);
  });

}

exports.MongooseConnect = MongooseConnect;
exports.store = store;
