var express = require ("express") ;
var http = require ("http")

var app = express() ;
app.get ("/" , function (req , res) {
  res.sendFile (__dirname + "/index.html") ;
}) ;

http.Server(app).listen(3000 , function () {
  console.log ("listening on *:3000") ;
}) ;
