var gulp = require('gulp'),
    concat = require('gulp-concat'),
    minifyCSS = require('gulp-minify-css'),
    jade = require('gulp-jade'),
    less = require('gulp-less'),
    path = require('path'),
    livereload = require('gulp-livereload'),
    uglify = require('gulp-uglify'),
    uncss = require('gulp-uncss'),
    rename = require("gulp-rename"),
    pngquant = require('imagemin-pngquant'),
    optipng = require('imagemin-optipng');

// image optimization
gulp.task('imgOpt', function() {
  gulp.src('src/img/**/*.{jpeg,jpg,png,gif,svg}')
  .pipe(pngquant(
  // {quality: '65-80', speed: 4}
  ))
  // .pipe(optipng({optimizationLevel: 3}))
  .pipe(gulp.dest('dist/img'));
});

// concat
gulp.task('scriptConcat', function() {
  return gulp.src([
      'src/js/multi-carousel.js',
      'src/js/main.js'
    ])
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/js'));
});

 // jade
gulp.task('jade', function() {
  gulp.src([
      'src/jade/index.jade',
      'src/jade/contacts.jade',
      'src/jade/about.jade',
      'src/jade/corporal.jade',
      'src/jade/modal_service.jade'
    ])
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('dist/'))
    .pipe(livereload());
});

 // less
gulp.task('less', function () {
  return gulp.src('src/less/style.less')
    .pipe(less())
    .pipe(gulp.dest('dist/css'))
    .pipe(minifyCSS())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('dist/css'))
    .pipe(livereload());
});

 
// uglify
gulp.task('uglify', function() {
  gulp.src('scripts/main.js')
    .pipe(uglify())
    .pipe(rename('main.min.js'))
    .pipe(gulp.dest('/scripts'))
    .pipe(livereload());
});

// uncss
gulp.task('uncss', function() {
    return gulp.src('site.css')
        .pipe(uncss({
            html: ['index.html', 'posts/**/*.html', 'http://example.com']
        }))
        .pipe(gulp.dest('./out'));
});


gulp.task('default', ['jade', 'less', 'scriptConcat'], function () {
  livereload.listen();
  gulp.watch('src/jade/*.jade', ['jade']);
  gulp.watch('src/less/*.less', ['less']);
  gulp.watch('src/js/*.js', ['scriptConcat']);
});