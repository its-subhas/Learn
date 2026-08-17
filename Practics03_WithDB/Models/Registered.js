// const { getDB } = require("../Util/dbMongo");
// const { ObjectId } = require("mongodb");











const mongoose = require("mongoose");
const { type } = require("node:os");

const homeSchema = new mongoose.Schema({
  housePhoto: { type: String, required: true },
  houseName: { type: String, required: true },
  owner: { type: String, required: true },
  location: { type: String, required: true },
  rent: { type: Number, required: true },
  bedrooms: { type: Number },
  description: { type: String },
  available: { type: String },
});

module.exports = mongoose.model("Homes", homeSchema);


























// module.exports = class RegisteredHouses {
//   constructor(
//     houseName,
//     owner,
//     location,
//     rent,
//     bedrooms,
//     description,
//     available,
//   ) {
//     this.houseName = houseName;
//     this.owner = owner;
//     this.location = location;
//     this.rent = rent;
//     this.bedrooms = bedrooms;
//     this.description = description;
//     this.available = available;
//   }

//   static fetchAll() {
//     const db = getDB();
//     return db.collection("home").find().toArray();
//   }

//   save() {
//     const db = getDB();
//     return db.collection("home").insertOne(this);
//   }

//   static deleteHome(homeId) {
//     const db = getDB();
//     return db.collection("home").deleteOne({ _id: new ObjectId(homeId) });
//   }

//   static findById(homeId) {
//     const db = getDB();
//     return db.collection("home").findOne({ _id: new ObjectId(homeId) });
//   }

//   static saveEdit(homeId, data) {
//     const db = getDB();
//     return db
//       .collection("home")
//       .updateOne(
//         { _id: new ObjectId(homeId) },{$set: data}); // replace second obj
//   }
// };

// const db = require("../Util/dbMySql");

// static fetchAll() {
//   return db.execute("select * from homes;");
// }

// save() {
//   return db.execute(
//     "insert into homes (houseName,owner,location,rent,bedrooms,description,available) values (?,?,?,?,?,?,?);",
//     [
//       this.houseName,
//       this.owner,
//       this.location,
//       this.rent,
//       this.bedrooms,
//       this.description,
//       this.available,
//     ],
//   );
// }

// static deleteHome(homeId) {
//   return db.execute("delete from homes where id=?", [homeId]);
// }

// static findById(homeId) {
//    return db.execute("select * from homes where id=?", [homeId]);
// }

// static saveEdit(homeId, data) {
//    return db.execute("update homes set  houseName = ?, owner = ?, location = ?, rent = ?, bedrooms = ?, description = ?, available = ? WHERE id = ?", [data.houseName,data.owner,data.location,data.rent,data.bedrooms,data.description, data.available, homeId]);
// }
