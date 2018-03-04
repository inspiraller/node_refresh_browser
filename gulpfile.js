var gulp          = require('gulp');
var browsersync   = require('browser-sync').create();
var nodemon       = require('gulp-nodemon');
var reload = browsersync.reload;

// Date working 2018/03/04 - for windows.

// Disclaimer
// After trying many combinations, of settings - browsersync reloadDelay, nodemon.restart, files to watch in browserSync or nodemon, the browser doesn't always refresh with the new data.
// The sure way of solving this problem was to put a timeout in the gulp file below.
// increase this if your nodemon is running slowly
// In addition, regarding node server - app.js makesure that the html file returned is wrapped in html and body tags. Otherwise browsersync will not inject it's script to reload the page.

var BROWSER_SYNC_REFRESH = 1; // increase this value if browsersync fails to refresh.

var paths = {
  app: './app.js'
}

var arrWatchPaths = [];
for (key in paths){
  arrWatchPaths.push(paths[key]);
}

gulp.task('browserSync', ['nodemon'], function() {
  browsersync.init({
    proxy: "http://localhost:3000",  // local node app address
    port: 4000,
    notify: false
  });
});

gulp.task('nodemon', function (cb) {
  var called = false;
  return nodemon({
    script: 'app.js'
  })
  .on('start', function () {
    if (!called) {
      called = true;
      cb();
    }
  })
});

gulp.task('default', ['browserSync'], function (){
  gulp.watch(arrWatchPaths).on('change', function (){
    setTimeout(reload, BROWSER_SYNC_REFRESH);
  });
});
