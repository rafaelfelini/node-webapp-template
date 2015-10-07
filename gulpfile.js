var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');
var mainBowerFiles = require('main-bower-files');

gulp.task('default', function () {
    nunjucksRender.nunjucks.configure(['src/html/templates/'], {watch: false});
    gulp.src('src/html/**.*')
        .pipe(nunjucksRender())
        .pipe(gulp.dest('dist'));
});

var rev = require('gulp-rev');

// gulp.task('rev', ['less', 'scripts'], function() {
gulp.task('rev', ['default'], function() {
  return gulp.src(mainBowerFiles())
  //return gulp.src(['dist/**/*.css', 'dist/**/*.js'])
    .pipe(rev())
    .pipe(gulp.dest('dist/lib'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('dist/lib'));
});
