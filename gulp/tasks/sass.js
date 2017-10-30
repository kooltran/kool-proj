var conf = require('../config.json');
var gulp = require('gulp');
var sass = require('gulp-sass');
var gulpStylelint = require('gulp-stylelint');
var autoprefixer = require('gulp-autoprefixer');
var runSequence = require('run-sequence');
var sourcemaps = require('gulp-sourcemaps');

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

gulp.task('sass', function (cb) {
  'use strict';
  return runSequence(['sass:lint', 'sass:build'], cb);
});

gulp.task('sass:lint', function () {
  'use strict';
  return gulp.src([
    conf.base.src + conf.path.sass + conf.files.sassAll,
    '!' + conf.base.src + conf.path.sass + '**/_mixins.scss'
  ])
  .pipe(gulpStylelint({
    reporters: [
      {formatter: 'string', console: true}
    ]
  }))
  .on('error', handleError);
});

gulp.task('sass:build', function () {
  'use strict';
  return gulp.src(conf.base.src + conf.path.sass + conf.files.sass)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(conf.base.build + conf.path.css));
});
