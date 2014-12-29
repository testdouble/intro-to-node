#! /usr/local/bin/node

var fs = require('fs');
var crypto = require('crypto');
var counter = 0;
var interval = setInterval(function() {
  crypto.randomBytes(48, function(ex, buf) {
    var token = buf.toString('hex');
    fs.writeFile("./secretbombdisarmingcodes.txt",
      'CODES[' + new Date() + '] - ' + token + '\n',
      function(err) {
        if (err) {
          console.log("Couldn't write secret code: " + err);
        }
      }
    );
  });
  counter++;
  if (counter >= 120) {
    clearInterval(interval);
  }
}, 5000);
