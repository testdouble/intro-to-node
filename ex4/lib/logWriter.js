#! /usr/local/bin/node

var fs = require('fs');
var stream = fs.createWriteStream("mybigfile.log");
stream.once('open', function(fd) {
  var counter = 0;
  var interval = setInterval(function() {
    stream.write('INFO[' + new Date() + '] - Read some data!\n');
    stream.write('DEBUG[' + new Date() + '] - Did some stuff!\n');
    stream.write('INFO[' + new Date() + '] - Wrote some data!\n');
    stream.write('ERROR[' + new Date() + '] - Bad things happened!\n');
    counter++;
    if (counter >= 120) {
      clearInterval(interval);
      stream.end();
    }
  }, 5000);
});
