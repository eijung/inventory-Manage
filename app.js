const express = require('express')
const http = require("http");
var mysql = require('mysql');
const fs = require('fs');
var ejs = require('ejs');

const app = express()
var server = http.createServer(app)

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static(__dirname + '/public'));

var con = mysql.createConnection({
    host:'ftlab-server.mysql.database.azure.com',
    user:'ftadmin',
    password:'#ftlab4702',
    database:'dotnet_test',
    ssl: {
        rejectUnauthorized: true
    },
    dialectOptions: {
        options: {
        requestTimeout: 3000
        }
    }
});
var info = []

con.connect(function(err) {

    if (err) throw err;
  
    var sql = "SELECT * FROM devices";
  
    con.query(sql, function (err, result, fields) {
  
      if (err) throw err;
      
  
    });
});

app.get('/', (req, res) => {
    con.query("SELECT * FROM devices", function (err, result, fields) {
        if (err) throw err;
        res.render('index' , {data: result})
    });
})

server.listen(4702, () => {
    console.log('success')
})