var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', function (cb){
  'use strict';
  return runSequence('clean', ['copy:build', 'pug:build', 'sass', 'js:build'], cb);
  // Remove sprity because of a but in sprity-lwip
  // return runSequence('clean', ['copy:build', 'pug:build', 'sass', 'js:build', 'sprity:build'], cb);
});
