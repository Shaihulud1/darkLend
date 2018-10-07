var gulp = require('gulp'),
    sass = require('gulp-sass'),
    scssFolder = './template/sass/*.scss',
    cssFolder = './template/css/',
    jsFolder = './template/js/';

gulp.task('sassCompile', function(){
    gulp.src(scssFolder)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(cssFolder));
});

gulp.task('watcher', function(){
    gulp.watch(scssFolder, ['sassCompile']);
});
