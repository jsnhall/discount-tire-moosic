'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var pump = require('pump');
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

gulp.task('babel', async () => 
  gulp.src('./src/js/*.js')
  .pipe(babel({
    presets: ['@babel/env']
  }))
  .pipe(gulp.dest('./js'))
)

gulp.task('compress', function (cb) {
  pump([
      gulp.src('./js/*.js'),
      uglify(),
      gulp.dest('./js')
    ],
    cb
  );
})

gulp.task('autoprefixer', async () => {
  gulp.src('./src/css/*.css')
  .pipe(autoprefixer({
    cascade: false
  }))
  .pipe(gulp.dest('./css'))
})

gulp.task('minify-css', async () => {
  gulp.src('./css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./css'))
});

gulp.task('img-compress', async () => {
  gulp.src('./src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./images'))
})

gulp.task('transfer-index', async () => {
  gulp.src('./src/index.html')
    .pipe(gulp.dest('./'))
})

gulp.task('transfer-music', async () => {
  gulp.src('./src/music/*')
    .pipe(gulp.dest('./music'))
})

gulp.task('build', gulp.series('babel', 'autoprefixer', 'minify-css', 'img-compress', 'compress', 'transfer-index', 'transfer-music'))

gulp.task('watch', function() {
  gulp.watch('./src/sass/**/*.scss', gulp.series('sass'));
});
