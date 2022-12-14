const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const port = 1000;

const server = express();

//middle ware
server.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    optionsSuccessStatus: 200,
  })
);
server.use(express.urlencoded({ extended: true }));

// server listener
server.listen(port, (req, res) => {
  console.log("Server listening on port " + port);
});
var mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "myDBuser",
  password: "myDBuser",
  database: "mydb",
});
mysqlConnection.connect((err) => {
  if (err) {
    console.log("---------\nthere is mysql connection error\n-----------");
  } else {
    console.log("********\nmysql Connected Successfuly\n**********");
  }
});
server.get("/iphone", (req, res) => {
  const selectIphone = `Select * from Products join productdescription join productprice on products.product_id = productdescription.product_id and products.product_id = productprice.product_id`;

  mysqlConnection.query(selectIphone, (err, result) => {
    if (err) {
      console.log("there is an error in selecting /iphone gets");
    } else {
      console.log("Job Done");
      var IphonesApiRes = {
        products: [],
      };
      IphonesApiRes.products = result;
      res.json(IphonesApiRes);
    }
  });
  // res.end("<h1>Hey</h1>");
});

// server.get("/betsi", (req, res) => {
//   res.end("<h1>HEy betsi</h1>");
// });
