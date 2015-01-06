#! /usr/local/bin/node

var fs = require('fs');
var crypto = require('crypto');
var bombCrypto = require('./bombCrypto');

var counter = 0;
var interval = setInterval(function() {
  crypto.randomBytes(48, function(ex, buf) {
    var token = buf.toString('hex');
    var content = 'CODES[' + new Date() + '] - ' + token + '\n';

    console.log('Writing bomb code...');
    fs.writeFile("./secretbombdisarmingcodes.txt", bombCrypto.encrypt(content),
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
