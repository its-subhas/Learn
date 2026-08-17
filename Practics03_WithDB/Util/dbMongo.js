const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;

const URL =
  "mongodb+srv://:@mern-db.sypsrxp.mongodb.net/?appName=MERN-DB";

let _db;

const mongoConnect = (callback) => {

  MongoClient.connect(URL)
    .then((client) => {

     console.log("MongoDB Connected !");


     _db = client.db('homes');

     callback();


    })
    .catch((err) => {
      console.log("Connection Failed !", err);
    });

};



  const getDB = ()=>{
     if(!_db) {
      throw new Error('Connection Failed !')
     }

     return _db;
  }


exports.mongoConnect = mongoConnect;
exports.getDB = getDB;

