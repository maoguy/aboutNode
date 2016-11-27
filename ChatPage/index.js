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
}) ;

server.listen(3000 , function () {
  console.log ("listening on *:3000") ;
}) ;
