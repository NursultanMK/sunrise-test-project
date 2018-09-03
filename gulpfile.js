'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
    gulp.src('app/dev/scss/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/dev/css'))
});

gulp.task('watch', function () {
    gulp.watch('app/dev/scss/**/*.scss', ['sass']);
});

gulp.task('autoprefix', function () {
    gulp.src('app/dev/css/main.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('app/dev/css'))
})