const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "whippersnapper3",
    database: "employees"
  });
  
  connection.connect();

  module.exports = connection