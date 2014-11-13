var fs = require('fs');

module.exports = function(req, res, next) {

  var filename = req.query.filename;

  if (!filename) {
    res.send(404, "A file must be specified!");
    return next();
  }

  fs.readFile(filename, {encoding: 'utf8'}, function(err, data) {
    if (err) {
      res.send(404, "Unable to process file: " + filename);
      return next();
    }
    res.send(data);
    return next();
  });

};
