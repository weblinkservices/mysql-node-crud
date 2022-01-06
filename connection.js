const mysql = require("mysql");
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "Bank",
    multipleStatements: true
});

con.connect((err) => {
    if (err) throw err;
    if (!err) {
        console.log("Datbases connected successfully...!!!");
    } else {
        console.log("Connection Failed :", err.message);
    }
})

module.exports= con;