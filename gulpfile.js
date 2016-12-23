var gulp = require('gulp');
//include plugins
var uglify = require('gulp-uglify');
var compass = require('gulp-compass');
var livereload = require('gulp-livereload');

// Styles Task
gulp.task('styles', function() {
    gulp.src('scss/**/*.scss')
        .pipe(compass({
            config_file: './config.rb',
            sass: './scss',
            style: 'compressed'
        }))
        .pipe(gulp.dest('css/'));
});

// Watch task
gulp.task('watch', function(){
    gulp.watch('scss/**/*.scss', ['styles']);
});

gulp.task('default', ['styles', 'watch']);
