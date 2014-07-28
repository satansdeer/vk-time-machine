var gulp = require('gulp');
var gutil = require('gulp-util');

// Include Our Plugins
var coffee = require('gulp-coffee');
var sass = require('gulp-sass');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('coffee', function() {
  gulp.src('./app/*.coffee')
    .pipe(coffee({bare: true}).on('error', gutil.log))
    .pipe(gulp.dest('./public/'))
});

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('app/styles/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('js/*.js', ['scripts']);
    gulp.watch('scss/*.scss', ['sass']);
});


gulp.task('default', ['coffee', 'sass', 'scripts']);
