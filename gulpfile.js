
// define gulp
const gulp = require('gulp');

// define sass
const sass = require('gulp-sass');

// compile sass
sass.compiler = require('node-sass');

// minify css 
const cssnano = require('gulp-cssnano');

gulp.task('sass', () => {
    return gulp.src('./sass/*.scss')
        .pipe(sass())
        .pipe(cssnano())
        .pipe(gulp.dest('./build'));
});

gulp.task('watch', () => {
    gulp.watch('./sass/**/*.scss', gulp.series('sass'));
});

gulp.task('default', gulp.series('sass', 'watch'));