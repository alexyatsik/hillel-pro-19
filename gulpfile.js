const gulp = require('gulp');
const clean = require('gulp-clean');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();

const CSS_BUILD_DEST = './build/css';
const CSS_FILES = [
    './src/css/**/*.css'
];

const JS_BUILD_DEST = './build/js';
const JS_FILES = [
    './src/js/entities/common/DOMElement.js',
    './src/js/entities/common/Button.js',
    './src/js/entities/common/Input.js',
    './src/js/entities/common/Form.js',
    './src/js/entities/*.js',
    './src/js/*.js'
];

gulp.task('clean', del);
gulp.task('css', css);
gulp.task('js', js);
gulp.task('watch', watch);
gulp.task('build', gulp.series('clean', gulp.parallel('js', 'css')));
gulp.task('dev', gulp.series('build', 'watch'));

function del() {
    return gulp.src('./build/*')
        .pipe(clean());
}

function css() {
    return gulp.src(CSS_FILES)
        .pipe(sourcemaps.init())
        .pipe(cleanCSS())
        .pipe(concat('style.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(CSS_BUILD_DEST))
        .pipe(browserSync.stream());
}

function js() {
    return gulp.src(JS_FILES)
        .pipe(sourcemaps.init())
        .pipe(babel({
            "presets": ["@babel/preset-env"]
        }))
        .pipe(concat('bundle.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(JS_BUILD_DEST))
        .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('./src/css/**/*.css', css);
    gulp.watch('./src/js/**/*.js', js);
    gulp.watch("./*.html").on('change', browserSync.reload);
}