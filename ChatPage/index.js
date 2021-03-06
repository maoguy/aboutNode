var express = require ("express") ;
var http = require ("http")
var socket = require ("socket.io") ;

var app = express () ;
var server = http.Server (app) ;
var io = socket (server) ;

app.get ("/" , function (req , res) {
  res.sendFile (__dirname + "/index.html") ;
}) ;
io.on ("connection" , function (socket) {
  console.log ("a user connected") ;
  socket.on ("chat message" , function (msg) {
    io.emit ("chat message" , msg) ;
    console.log ("message: " + msg) ;
  }) ;
  socket.on ("disconnect" , function () {
    console.log ("user disconnected") ;
  }) ;
}) ;

server.listen(3000 , function () {
  console.log ("listening on *:3000") ;
}) ;
