//including all the gulp stuff imma need.
const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const uglifyJs = require('gulp-uglify');
const uglifyCss = require('gulp-clean-css');
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');
const rename = require('gulp-rename');


gulp.task('imagemin', () =>
  gulp.src('images/**.*')
    .pipe(imagemin({progressive: true}))
    .pipe(gulp.dest('build/'))
);

gulp.task('uglify-js', () =>
  gulp.src('scripts/**/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(concat('main.js'))
    .pipe(uglifyJs())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('build/'))
);

gulp.task('uglify-css', ['sass-compile'], () =>
  gulp.src('styles/**/*.css')
    .pipe(concat('main.css'))
    .pipe(uglifyCss())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('build/'))
);

gulp.task('sass-compile', () =>
  gulp.src('styles/sass/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('styles/'))
);

gulp.task('default', ['imagemin', 'uglify-js', 'uglify-css']);
