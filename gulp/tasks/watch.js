'use strict';

var gulp = require('gulp');

// Build HTML files
gulp.task('watch', function () {
    gulp.watch(['UI/sass/**/*.sass','UI/sass/**/*.scss'], ['build:css']);
    gulp.watch(['UI/images/**'], ['build:css']);
    gulp.watch(['UI/fonts/**'], ['build:css']);
});
