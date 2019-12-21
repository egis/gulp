'use strict';

var fs = require('fs');
var path = require('path');
var log = require('fancy-log');

module.exports = function(name) {
  if (typeof name !== 'string') {
    throw new Error('Missing completion type');
  }
  var file = path.join(__dirname, '../completion', name);
  try {
    log(fs.readFileSync(file, 'utf8'));
    process.exit(0);
  } catch (err) {
    log(
      'echo "gulp autocompletion rules for',
      '\'' + name + '\'',
      'not found"'
    );
    process.exit(5);
  }
};
