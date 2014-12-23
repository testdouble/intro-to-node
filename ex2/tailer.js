'use strict';

var fs = require('fs');
var util = require('util');
var events = require('events');

var Tailer = function(filename) {
  var self = this;
  self.filename = filename;
  self.buffer = '';
  self.position = 0;

  events.EventEmitter.call(this);

  fs.watch(self.filename, function() {
    var fd = fs.openSync(self.filename, 'r');
    fs.fstatSync(fd, function(err, stat) {
      if (err) { return self.emit('error', err); };
console.log('stat = ' + JSON.stringify(stat));
      var start = self.position;
      var end = stat.size;

      if (end < start) {
        console.log('File ' + self.filename + ' shrunk! Starting over...');
        start = 0;
      };

      var size = end - start;
      if (size > 0) {
        var buffer = new Buffer(size);// Needed?
        fs.read(fd, buffer, 0, size, start, function(err, bytesRead, buff) {

          console.log('Bytes read = ' + bytesRead);
          console.log('Buffer = ' + buff);

          if (err) { return self.emit('error', err); };

          if (bytesRead == 0) { return; };

          self.position += bytesRead;
          buff = buff.toString("utf-8");// Convert to string
          self.buffer += buff; // Add to internal buffer
          parts = self.buffer.split(self.separator); // Split based on separator
          self.buffer = parts.pop(); // Reset internal buffer to just the last one?

          var chunk, parts, _i, _len;
          for (_i = 0, _len = parts.length; _i < _len; _i++) {
            chunk = parts[_i];
            self.emit("line", chunk);
          };
        });
      }
    });
  });
}

util.inherits(Tailer, events.EventEmitter);

exports.Tailer = Tailer;
exports.watch = function(filename) {
  return new Tailer(filename);
}
