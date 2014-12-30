'use strict';

var fs = require('fs');
var util = require('util');
var events = require('events');

var FileMon = function(filename) {
  var self = this;
  self.filename = filename;
  events.EventEmitter.call(this);

  if (!fs.existsSync(filename)) {
    throw new Error('File does not exist!');
  }

  fs.readFile(self.filename, {encoding: 'utf8'}, function(err, data) {
    if (data) {
      self.emit('data', data);
    }
  });

  fs.watchFile(filename, function() {
    fs.readFile(self.filename, {encoding: 'utf8'}, function(err, data) {
      if (data) {
        self.emit('data', data);
      }
    });
  });
}

util.inherits(FileMon, events.EventEmitter);

exports.FileMon = FileMon;
exports.watch = function(filename) {
  return new FileMon(filename);
}
