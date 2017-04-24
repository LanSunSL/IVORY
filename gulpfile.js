(function() {
    'use strict';
 
    var gulp            = require('gulp')
      , sass            = require('gulp-sass')
      , runSequence     = require('run-sequence')
      , connect         = require('gulp-connect');
    
    gulp.task('sass', function() {
        return gulp.src('./scss/*.scss')
            .pipe(sass.sync().on('error', sass.logError))
            .pipe(gulp.dest('./dist/css'));
    });
    
    gulp.task('demo', function() {
        return gulp.src('./demo/styles.scss')
            .pipe(sass.sync().on('error', sass.logError))
            .pipe(gulp.dest('./demo'));
    });

    gulp.task('connect', function() {
        connect.server();
    });

    gulp.task('sass:watch', function () {
        gulp.watch('./scss/common/*.scss', ['sass']);
        gulp.watch('./scss/components/*.scss', ['sass']);
        gulp.watch('./demo/*.scss', ['demo']);
    });

    gulp.task('default', function() {
        runSequence('sass', 'demo', 'connect', 'sass:watch');
    });

})();