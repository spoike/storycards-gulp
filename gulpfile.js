var gulp = require('gulp'),
    runSequence = require('run-sequence'),
    tap = require('gulp-tap'),
    sass = require('gulp-sass'),
    asCard = require('./lib/as-card'),
    toHtml = require('./lib/to-html');

var loadedCards = [];

gulp.task('load-cards', function() {
    return gulp.src('./src/cards/*.md')
        .pipe(tap(function(file) {
            loadedCards.push(asCard(file));
        }));
});

gulp.task('to-html', function() {
    toHtml('./src/jade/template.jade', loadedCards)
        .pipe(gulp.dest('build/'));
});

gulp.task('sass', function() {
    return gulp.src('./src/sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('build/'));
});

gulp.task('build', function() {
    runSequence('load-cards', 'to-html');
});

gulp.task('default', ['sass', 'build'], function() {
});