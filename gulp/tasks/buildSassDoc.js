var gulp = require('gulp'),
    pathTo = require('../config').css,
    sassdoc = require('sassdoc');

gulp.task('build:sassdoc', function () {
    return gulp
        .src(pathTo.sourceDir + '/sass/**/*')
        .pipe(sassdoc({ dest: pathTo.sourceDir + '/sassdoc' }))
        .resume();
});