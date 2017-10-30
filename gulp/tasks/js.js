const conf = require('../config.json');
const gulp = require('gulp');
const gulpWebpack = require('webpack-stream');
const webpack = require('webpack');
const eslint = require('gulp-eslint');
const webpackConfig = require('../webpack.config');
const webpackConfigProd = require('../webpack.config.prod');
const runSequence = require('run-sequence');

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

gulp.task('js:lint', function() {
  'use strict';
  return gulp.src([conf.base.src + conf.path.assets + conf.files.js])
    .pipe(eslint({configFile: './.eslintrc.json'}))
    .pipe(eslint.format());
});

gulp.task('js:build', function(cb) {
  'use strict';
  return runSequence(['js:lint', 'js:webpack:build'], cb);
});

gulp.task('js:compile', function(cb) {
  'use strict';
  return runSequence(['js:lint', 'js:webpack:compile'], cb);
});

gulp.task('js:webpack:build', function() {
  'use strict';
  return gulp.src([conf.base.src + conf.path.assets + conf.files.js])
  .pipe(gulpWebpack(webpackConfig, webpack))
  .on('error', handleError)
  .pipe(gulp.dest(conf.base.build + conf.path.js));
});
gulp.task('js:webpack:compile', function() {
  'use strict';
  return gulp.src([conf.base.src + conf.path.assets + conf.files.js])
    .pipe(gulpWebpack(webpackConfigProd, webpack))
    .on('error', handleError)
    .pipe(gulp.dest(conf.base.build + conf.path.js));
});
