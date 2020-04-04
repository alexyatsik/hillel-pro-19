const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

gulp.task('build', done => {
    gulp.src('./src/js/**/*.js')
        .pipe(babel({
            "presets": ["@babel/preset-env"]
        }))
        .pipe(uglify())
        .pipe(gulp.dest('./build/'));
    done();
});