let gulp = require('gulp'),
    pug = require('gulp-pug'),
    postcss = require('gulp-postcss'),
    browserSync = require('browser-sync'),
    precss = require('precss'),
    cssnext = require('postcss-cssnext'),
    short = require('postcss-short'),
    mqpacker = require('css-mqpacker'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglifyjs');

gulp.task('pug', () => {
  gulp.src('./src/*.pug')
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest('./public'))
});

gulp.task('css', () => {
  let processors = [
    precss,
    cssnext,
    short,
    mqpacker
  ];
  return gulp.src('src/css/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('public/css'));
});

gulp.task('scripts', () => {
  return gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(rename({suffix: ".min"}))
        .pipe(gulp.dest("public/js"));
});

gulp.task('serve', () => {
  browserSync.init({
    server: {
      baseDir: "public"
    },
    notify: false
  })
});

gulp.task('watch',['serve', 'pug', 'css', 'scripts'], () => {
  gulp.watch('src/css/*.css', ['css'])
  gulp.watch('src/js/**/*.js', browserSync.reload)
  gulp.watch('public/index.html', browserSync.reload)
});

gulp.task('default', ['watch']);
