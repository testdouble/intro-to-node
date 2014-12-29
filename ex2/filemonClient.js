'use strict';
var FileMon = require('./filemon.js');
var filename = process.argv[2];

if (!filename) {
  throw Error("A file must be specified!");
}

var client = FileMon.watch(filename);
client.on('data', function(data) {
  console.log('File watch, emitted data!');
  console.log(data);
});
