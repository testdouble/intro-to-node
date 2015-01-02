#! /usr/local/bin/node

var fs = require('fs');
var crypto = require('crypto');
var algorithm = 'aes-256-ctr';
var password = 'daltonsmustache';

function encrypt(text){
  var cipher = crypto.createCipher(algorithm,password)
  var crypted = cipher.update(text,'utf8','hex')
  crypted += cipher.final('hex');
  return crypted;
}

function decrypt(text){
  var decipher = crypto.createDecipher(algorithm,password)
  var dec = decipher.update(text,'hex','utf8')
  dec += decipher.final('utf8');
  return dec;
}

var counter = 0;
var interval = setInterval(function() {
  crypto.randomBytes(48, function(ex, buf) {
    var token = buf.toString('hex');
    var content = 'CODES[' + new Date() + '] - ' + token + '\n';

    fs.writeFile("./secretbombdisarmingcodes.txt", encrypt(content),
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
