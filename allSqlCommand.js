//-1-111111111111111111111111111111111111111111-1-1-1-1-1-11-basic
// const mysql = require('mysql');
// const express = require("express");
// const app = express();
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'geek'
// });
// connection.connect((err) => {
//     if (err) throw err;
//     console.log('Connected to MySQL Server!');
//   });
//   app.get("/",(req,res) => {
//     // var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
//     // connection.query(sql, function (err, result) {
//     //   if (err) throw err;
//     //   console.log("1 record inserted");
//     // });
//   });
//     app.listen(3000, () => {
//       console.log('Server is running at port 3000');
//   });
//   =====================================================0000000000000000000000 fetch data
// fetch from sever working
// const mysql = require('mysql');
// const express = require("express");
// const app = express();
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'geek'
// });

// connection.connect((err) => {
//   if (err) throw err;
//   console.log('Connected to MySQL Server!');
// });
// app.get("/",(req,res) => {
//     connection.query('SELECT * from student LIMIT 3', (err, rows) => {
//         if(err) throw err;
//         console.log('The data from student table are: \n', rows);
//         connection.end();
//     });
// });

// app.listen(3000, () => {
//     console.log('Server is running at port 3000');
// });
// =========================================222222222222222222222insert  one row working

// const mysql = require('mysql');
// const express = require("express");
// const app = express();
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'geek'
// });
// connection.connect((err) => {
//     if (err) throw err;
//     console.log('Connected to MySQL Server!');
//   });
//   app.get("/",(req,res) => {
//     var sql = "INSERT INTO student (id,firstname, lastname) VALUES ('5','Company Inc', 'Highway 37')";
//     connection.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("1 record inserted");
//       });
//   });
  
//   app.listen(3000, () => {
//       console.log('Server is running at port 3000');
//   });

//   ======================================================3333333333333333create table in geek db working

// const mysql = require('mysql');
// const express = require("express");
// const app = express();
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'geek'
// });
// connection.connect((err) => {
//     if (err) throw err;
//     console.log('Connected to MySQL Server!');
//   });
//   app.get("/",(req,res) => {
//     var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
//     connection.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("1 record created");
//       });
//   });
  
//   app.listen(3000, () => {
//       console.log('Server is running at port 3000');
//   });
// =====================================================================4444444444444 insert single data working

// const mysql = require('mysql');
// const express = require("express");
// const app = express();
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'geek'
// });
// connection.connect((err) => {
//     if (err) throw err;
//     console.log('Connected to MySQL Server!');
//   });
//   app.get("/",(req,res) => {
//     var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
//     connection.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("1 record inserted");
//     });
//   });
//     app.listen(3000, () => {
//       console.log('Server is running at port 3000');
//   });
  
//   =====================================55555555555555555555555 insert multiple data working

// const mysql = require('mysql');
// const express = require("express");
// const app = express();
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'geek'
// });
// connection.connect((err) => {
//     if (err) throw err;
//     console.log('Connected to MySQL Server!');
//   });
//   app.get("/",(req,res) => {
//     var sql = "INSERT INTO customers (name, address) VALUES ?";
//     var values = [
//       ['John', 'Highway 71'],
//       ['Peter', 'Lowstreet 4'],
//       ['Amy', 'Apple st 652'],
//       ['Hannah', 'Mountain 21'],
//       ['Michael', 'Valley 345'],
//       ['Sandy', 'Ocean blvd 2'],
//       ['Betty', 'Green Grass 1'],
//       ['Richard', 'Sky st 331'],
//       ['Susan', 'One way 98'],
//       ['Vicky', 'Yellow Garden 2'],
//       ['Ben', 'Park Lane 38'],
//       ['William', 'Central st 954'],
//       ['Chuck', 'Main Road 989'],
//       ['Viola', 'Sideway 1633']
//     ];
//     connection.query(sql, [values], function (err, result) {
//       if (err) throw err;
//       console.log("Number of records inserted: " + result.affectedRows);
//     });
//   });
//     app.listen(3000, () => {
//       console.log('Server is running at port 3000');
//   });
  //6666666666666666666666666666666666666666666666666666666666666              search a particular address
//   const mysql = require('mysql');
// const express = require("express");
// const app = express();
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'geek'
// });
// connection.connect((err) => {
//     if (err) throw err;
//     console.log('Connected to MySQL Server!');
//   });
//   app.get("/",(req,res) => {
//     // connection.connect(function(err) {
//     //     if (err) throw err;
//         connection.query("SELECT * FROM customers WHERE address = 'Park Lane 38'", function (err, result) {
//           if (err) throw err;
//           console.log(result);
//         });
//       });
//     app.listen(3000, () => {
//       console.log('Server is running at port 3000');
//   });



//==============================================7777777777777777not work
//   const mysql = require('mysql');
// const express = require("express");
// const app = express();
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'geek'
// });
// connection.connect((err) => {
//     if (err) throw err;
//     console.log('Connected to MySQL Server!');
//   });
//   app.get("/",(req,res) => {
   
//     // var sql = "DELETE FROM customers WHERE address = 'Mountain 21'";
//     var sql = "DELETE FROM customers WHERE name";

//           connection.query(sql, function (err, result) {  
//         if (err) throw err;
//           console.log(result);
//         });
//         });
     
//     app.listen(3000, () => {
//       console.log('Server is running at port 3000'); });
  