'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
const { pipeline } = require('stream');
const babel = require('gulp-babel');
const autoprefixer = require('gulp-autoprefixer');
let cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/css'));
});

exports.defualt = () => (
  gulp.src('./src/js/*.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(gulp.dest('./js'))
);

exports.default = () => (
  pipeline(
    gulp.src('./js/*.js'),
    uglify(),
    gulp.dest('./js')
  )
);

exports.default = () => (
  gulp.src('./src/css/*.css')
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(gulp.dest('./css'))
);

exports.default = () => (
  gulp.src('./css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./css'))
);

exports.default = () => (
  gulp.src('./src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./images'))
);

exports.default = async () => {
  gulp.src('./src/index.html')
    .pipe(gulp.dest('./'))
}

exports.default = async () => {
  gulp.src('./src/music/*')
    .pipe(gulp.dest('./music'))
}

gulp.task('watch', function() {
  gulp.watch('./src/sass/**/*.scss', gulp.series('sass'));
});
