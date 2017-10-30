var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('compile', function (cb){
    runSequence('clean', ['copy:build', 'pug:build', 'sass', 'js:compile'], ['copy:compile', 'imagemin:compile'], 'usemin', cb);
});
