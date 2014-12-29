'use strict';

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');
var FileMon = require('../ex2/filemon.js');
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

  socket.on('file-request', function(filename){
    console.log('File request for: ' + filename);

    if (!fs.existsSync(filename)) {
      socket.emit('file-response', {status: 'Cannot find ' + filename});
    }
    else {
      var filemon = FileMon.watch(filename);

      filemon.on("data", function(data) {
        socket.emit('file-response', {content: data});
      });
    }
  });

  socket.on('disconnect', function(socket){
    console.log('a user disconnected');
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
