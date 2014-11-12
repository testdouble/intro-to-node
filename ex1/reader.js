var fs = require('fs');
var filename = process.argv[2];
var spawn = require('child_process').spawn;

if (!filename) {
  throw Error("A file to watch must be specified!");
}

fs.readFile(filename, {encoding: 'utf8'}, function(err, data) {
  if (err) throw err;
  console.log(data);
});

fs.watch(filename, function() {
  console.log('File Changed, reloading');
  var less = spawn('less', [filename]);
  less.stdout.pipe(process.stdout);
});