const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);

const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://:@mern-db.sypsrxp.mongodb.net/?appName=MERN-DB";

async function test() {
  try {
    const client = new MongoClient(uri);
    await client.connect();
    console.log("Connected!");
    await client.close();
  } catch (err) {
    console.error(err);
  }
}

test();
