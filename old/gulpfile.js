

// define gulp
const gulp = require('gulp');

// define sass
const sass = require('gulp-sass');

// compile sass
sass.compiler = require('node-sass');

// minify css 
const cssnano = require('gulp-cssnano');

// minify html
const htmlmin = require('gulp-htmlmin');

gulp.task('sass_and_minify_css', () => {
    return gulp.src('./sass/*.scss')
        .pipe(sass())
        .pipe(cssnano())
        .pipe(gulp.dest('./css'));
});

gulp.task('minify_html', () => {
    return gulp.src('*.html')
        
        .pipe(htmlmin({ 
            collapseWhitespace: true,
            removeComments: true,
            removeAttributeQuotes: true
        }))
        .pipe(gulp.dest('./html'));
});

gulp.task('watch', () => {
    gulp.watch('./sass/**/*.scss', gulp.series('sass_and_minify_css'));
   
    
});

gulp.task('default', gulp.series('sass_and_minify_css','minify_html' , 'watch' ));