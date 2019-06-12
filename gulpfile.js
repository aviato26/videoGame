let gulp = require('gulp');
let browserSync = require('browser-sync');

gulp.task('sync', function() {
  browserSync.init(['./*.css', './*.html', './*.js'], {server: './GameComponents'});
});
