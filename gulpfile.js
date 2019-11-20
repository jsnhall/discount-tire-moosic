'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/css'));
});

gulp.task('build', function () {
  return gulp.src(['./src/**', '!./src/sass/**'])
  .pipe(gulp.dest('./'));
})

gulp.task('watch', function() {
  gulp.watch('./src/sass/**/*.scss', gulp.series('sass'));
});
