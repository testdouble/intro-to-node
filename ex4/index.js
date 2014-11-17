'use strict';

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');
var Tail = require('always-tail')
var fs = require('fs');


app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'index.html'));
});

io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('file-request', function(filename){
    console.log('File request for: ' + filename);

    if (!fs.existsSync(filename)) {
      socket.emit('file-response', {status: 'Cannot find ' + filename});
    }

    var tail = new Tail(filename, '\n');

    tail.on("line", function(data) {
      socket.emit('file-response', {content: data});
    });

    tail.on("error", function(error) {
      socket.emit('file-response', {status: 'Cannot process ' + filename + ', error: ' + error});
      console.log('ERROR: ', error);
    });

    tail.watch();
  });

  socket.on('disconnect', function(socket){
    console.log('a user disconnected');
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});