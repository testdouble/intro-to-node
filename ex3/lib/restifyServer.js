var restify = require('restify');
var fileReader = require('./fileReader');

function start() {
  var server = restify.createServer();
  server.use(restify.queryParser());

  server.get('/file', fileReader);

  server.listen(8080, function() {
    console.log('%s listening at %s', server.name, server.url);
  });
}

module.exports = {
  start: start
};
