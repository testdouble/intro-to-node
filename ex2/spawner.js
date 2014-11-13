'use strict';

var fs = require('fs');
var filename = process.argv[2];
var spawn = require('child_process').spawn;

if (!filename) {
  throw Error("A file to watch must be specified!");
}

var tail = spawn('tail', ['-F', filename]);

// With pipes:
// tail.stdout.pipe(process.stdout);

// With events:
tail.stdout.on('data', function(chunk) {
  console.log(chunk.toString());
});
