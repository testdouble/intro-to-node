'use strict';

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');
var fs = require('fs');


app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/socket.io-1.2.0.js', function(req, res){
  res.sendFile(path.join(__dirname, 'public/socket.io-1.2.0.js'));
});

app.get('/jquery-1.11.1.js', function(req, res){
  res.sendFile(path.join(__dirname, 'public/jquery-1.11.1.js'));
});

io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('request', function(msg){
    console.log('Request: ' + msg);
    socket.emit('response', {response: msg});
  });

  socket.on('disconnect', function(socket){
    console.log('a user disconnected');
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});