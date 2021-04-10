const mysql = require("mysql");
const dotenv = require("dotenv");
const util = require("util");
dotenv.config();
var connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "CosmicGuardian(0)",
    database: "burgers_db",
  });
}

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
});

connection.query = util.promisify(connection.query);

module.exports = connection;
