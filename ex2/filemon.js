'use strict';

var fs = require('fs');
var util = require('util');
var events = require('events');

var FileMon = function(filename) {
  var self = this;
  self.filename = filename;
  events.EventEmitter.call(this);

  fs.watch(self.filename, function(event, filename) {
    fs.readFile(self.filename, {encoding: 'utf8'}, function(err, data) {
      if (err) {
        self.emit('error', err);
      }
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
