'use strict';
var Tailer = require('./tailer.js');
var filename = process.argv[2];

if (!filename) {
  throw Error("A file must be specified!");
}

var tailerClient = Tailer.watch(filename);
tailerClient.on('watch', function(data) {
  console.log('Watching file, emitted ' + data);
});