'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', function () {
    gulp.src('app/dev/scss/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/dev/css'))
});

gulp.task('watch', function () {
    gulp.watch('app/dev/scss/**/*.scss', ['sass']);
});