
const express = require("express");
const con = require('./connection');
const bodyParser = require("body-parser");
const PeopleRoutes = require("./routes/people");
var app = express();

app.use(bodyParser.json());
app.use("/people", PeopleRoutes);

app.listen(3000);


// const id = 1;
// const name = "rohan";
// // var sql = `create table company (id int, name varchar(50))`;
// var sql = `insert into company values('${id}','${name}')`;

// con.query(sql, function (err, result) {
//   if (err) throw err;
//   console.log("Result : ", result);
// });