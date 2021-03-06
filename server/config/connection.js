const mysql = require("mysql2");
require('dotenv').config();

// Make connection.
const connection = mysql.createConnection(process.env.JAWSDB_URL);

if (process.env.JAWSDB_URL) {
    // Database is JawsDB on Heroku
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    // Database is local
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: process.env.password,
        database: "recipes_app_db"
    });
}
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});


// Export connection for our ORM to use.
module.exports = connection;