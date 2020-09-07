const gulp = require('gulp')
const concat = require('gulp-concat')
const autoprefexer = require('gulp-autoprefixer')
const cleanCSS = require('gulp-clean-css')
const uglify = require('gulp-uglify')
const del = require('del')
const browserSync = require('browser-sync').create();

const files = {
    cssPath: './src/css/**.*css',
    jsPath: './src/js/**.*js'
}

function styles() {
    return  gulp.src(files.cssPath)
    .pipe(concat('style.css'))
    .pipe(autoprefexer({
        cascade: false
    }))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./build/css/'))
    .pipe(browserSync.stream())
}

function scripts() {
    return  gulp.src(files.jsPath)
    .pipe(concat('script.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./build/js/'))
    .pipe(browserSync.stream())
}

function clean() {
    return del(['buld/*'])
}

function watch() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('./src/css/**/*.css', styles)
    gulp.watch('./src/js/**/*.js', scripts)
    gulp.watch("./*.html").on('change', browserSync.reload);
}

gulp.task('styles', styles)
gulp.task('scripts', scripts)
gulp.task('watch', watch)
gulp.task('build', gulp.series(clean, gulp.parallel(styles, scripts)))
gulp.task('dev', gulp.series('build', 'watch'))
