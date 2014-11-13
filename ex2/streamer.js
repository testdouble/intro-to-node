'use strict';

var fs = require('fs');
var filename = process.argv[2];

if (!filename) {
  throw Error("A file to watch must be specified!");
}


var stream = fs.createReadStream(filename);

stream.on('data', function(chunk) {
  process.stdout.write(chunk);
});

stream.on('error', function(err) {
  process.stderr.write('ERROR: ' + err.message + '\n');
})

fs.watch(filename, function() {
  fs.readFile(filename, {encoding: 'utf8'}, function(err, data) {
    if (err) throw err;
    process.stdout.write(data);
  });
});