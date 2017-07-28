var gulp = require('gulp'),
    shell = require('gulp-shell');

gulp.task('build:jsdoc', function () {
    return gulp.src(['UI/js/*.js'])
        .pipe(shell([
            'node_modules\\.bin\\jsdoc -c jsdoc.config.json'
        ]));
});