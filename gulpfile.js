var gulp = require('gulp'),
    runSequence = require('run-sequence'),
    tap = require('gulp-tap'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    asCard = require('./lib/as-card'),
    toHtml = require('./lib/to-html');

var loadedCards = [];

gulp.task('load-cards', function() {
    loadedCards = [];
    return gulp.src('./src/cards/*.md')
        .pipe(tap(function(file) {
            loadedCards.push(asCard(file));
        }));
});

gulp.task('to-html', function() {
    return gulp.src('./src/jade/template.jade')
        .pipe(watch(function() {
            return toHtml('./src/jade/template.jade', loadedCards)
                .pipe(gulp.dest('build/'));
        }));
});

gulp.task('sass', function() {
    return gulp.src('./src/sass/*.scss')
        .pipe(watch(function(files) {
            return files
                .pipe(sass())
                .pipe(gulp.dest('build/'));
        }));
});

gulp.task('build', function() {
    return gulp.src('./src/cards/*.md')
        .pipe(watch(function(files) {
            runSequence('load-cards', 'to-html');
            return files;
        }));
});

gulp.task('default', ['sass', 'build'], function() {
});