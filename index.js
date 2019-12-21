'use strict';

var util = require('util');
var Orchestrator = require('orchestrator');
var vfs = require('vinyl-fs');

function Gulp() {
  Orchestrator.call(this);
}
util.inherits(Gulp, Orchestrator);

Gulp.prototype.task = Gulp.prototype.add;
Gulp.prototype.run = function() {
  // `run()` is deprecated as of 3.5 and will be removed in 4.0
  // Use task dependencies instead

  // Impose our opinion of "default" tasks onto orchestrator
  var tasks = arguments.length ? arguments : ['default'];

  this.start.apply(this, tasks);
};

Gulp.prototype.src = vfs.src;
Gulp.prototype.dest = vfs.dest;

// Let people use this class from our instance
Gulp.prototype.Gulp = Gulp;

var inst = new Gulp();
module.exports = inst;
