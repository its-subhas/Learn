const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Subhas@263151",
  database: "nodedb",
});

module.exports = pool.promise();




