'use strict';

var fs = require('fs');
var filename = process.argv[2];

if (!filename) {
  throw Error("A file to watch must be specified!");
}

fs.readFile(filename, {encoding: 'utf8'}, function(err, data) {
  if (err) throw err;
  console.log(data);
});