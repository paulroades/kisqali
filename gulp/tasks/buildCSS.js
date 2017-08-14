'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    Promise = require('es6-promise').Promise,
    sourcemaps = require('gulp-sourcemaps'),
    pathTo = require('../config').css;

var autoprefixerOptions = {
    browsers: ['last 10 versions']
};

// Build CSS
gulp.task('build:css', function () {
    gulp.src(pathTo.sources)
        .pipe(sourcemaps.init())
        .pipe(sass({
            indentedSyntax: false,
            outputStyle: 'compressed'
        }))
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(pathTo.distributive));

    // Build CSS file for PDF version of site
    gulp.src(pathTo.printSources)
        .pipe(sass({
            indentedSyntax: false,
            outputStyle: 'compressed'
        }))
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(gulp.dest(pathTo.distributive));

    // Build CSS file for Entresto branded version
    // gulp.src(pathTo.sourceDir + 'sass/brands/entresto/master.sass')
    //     .pipe(sass({
    //         indentedSyntax: false,
    //         outputStyle: 'compressed'
    //     }))
    //     .pipe(autoprefixer(autoprefixerOptions))
    //     .pipe(gulp.dest(pathTo.distributive + 'entresto/'));

    // Build CSS file for Vivinda branded version
    // gulp.src(pathTo.sourceDir + 'sass/brands/vivinda/master.sass')
    //     .pipe(sass({
    //         indentedSyntax: false,
    //         outputStyle: 'compressed'
    //     }))
    //     .pipe(autoprefixer(autoprefixerOptions))
    //     .pipe(gulp.dest(pathTo.distributive + 'vivinda/'));

    // // Build CSS file for Zykadia branded version
    // gulp.src(pathTo.sourceDir + 'sass/brands/zykadia/master.sass')
    //     .pipe(sourcemaps.init())
    //     .pipe(sass({
    //         indentedSyntax: false,
    //         outputStyle: 'compressed'
    //     }))
    //     .pipe(autoprefixer(autoprefixerOptions))
    //     .pipe(sourcemaps.write('./'))
    //     .pipe(gulp.dest(pathTo.distributive + 'zykadia/'));
    // // Build shared CSS files for EpiServer
    // gulp.src(pathTo.sourceDir + 'sass/brands/zykadia/shared/' + '*.scss')
    //     .pipe(sass({
    //         indentedSyntax: false,
    //         outputStyle: 'compressed'
    //     }))
    //     .pipe(autoprefixer(autoprefixerOptions))
    //     .pipe(gulp.dest(pathTo.distributive + 'zykadia/'));

    // Build CSS file for kisqali branded version
    gulp.src(pathTo.sourceDir + 'sass/brands/kisqali/master.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            indentedSyntax: false,
            outputStyle: 'compressed'
        }))
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(pathTo.distributive + 'kisqali/'));
    // Build shared CSS files for EpiServer
    gulp.src(pathTo.sourceDir + 'sass/brands/kisqali/shared/' + '*.scss')
        .pipe(sass({
            indentedSyntax: false,
            outputStyle: 'compressed'
        }))
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(gulp.dest(pathTo.distributive + 'kisqali/'));

     // Build CSS file for kisqali2 branded version
    gulp.src(pathTo.sourceDir + 'sass/brands/kisqali2/master.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            indentedSyntax: false,
            outputStyle: 'compressed'
        }))
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(pathTo.distributive + 'kisqali2/'));
    // Build shared CSS files for EpiServer
    gulp.src(pathTo.sourceDir + 'sass/brands/kisqali2/shared/' + '*.scss')
        .pipe(sass({
            indentedSyntax: false,
            outputStyle: 'compressed'
        }))
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(gulp.dest(pathTo.distributive + 'kisqali2/'));

    // Build shared CSS files for EpiServer
    gulp.src(pathTo.sharedSources + '*.scss')
        .pipe(sass({
            indentedSyntax: false,
            outputStyle: 'compressed'
        }))
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(pathTo.distributive));
});
