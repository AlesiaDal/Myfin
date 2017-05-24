var gulp = require('gulp');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');




gulp.task('default', function() {
	//css
  // place code for your default task here
  gulp.src('../**/*.css')
        .pipe(cssmin())
        .pipe(rename({main: '.min'}))
        .pipe(gulp.dest('.app'));
});

gulp.task('bower-version', function() {
  return gulp.src('./bower.json')
    .pipe(bowerVersion());
});


gulp.task("watch", function(){
	gulp.watch("css/*.css", ["default"])
})