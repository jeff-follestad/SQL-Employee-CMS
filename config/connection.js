const mysql = require('mysql2');
var connection = mysql.createConnection({
	// Connection
	host: "localhost",
	port: 3306,
	user: "root",
	password: "Oakland2020!!",
	database: "employees",
});

connection.connect(function (err) {
	if (err) throw err;
});

module.exports = connection;