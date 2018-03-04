var gulp          = require('gulp');
var scss          = require('gulp-sass');
var sourcemaps    = require('gulp-sourcemaps');
var cleanCSS      = require('gulp-clean-css');
var gulpStyleLint = require('gulp-stylelint');
var gutil         = require('gulp-util');
var browsersync   = require('browser-sync').create();
var autoprefixer  = require('gulp-autoprefixer');
var del           = require('del');
var nodemon       = require('gulp-nodemon');
var isProduction = false;
var reload = browsersync.reload;

if ( gutil.env.production === true ) { // ENABLE CSS MINIFICATION USE WITH '--production' FLAG
  isProduction = true;
}

var paths = {
	htm:'./www/*.html',
  root:'./',
	scssPartials:'./www/scss/**/*.scss',
  scssMain:'./www/scss/*.scss',
  app: './app.js'
}

paths.scssAll = [paths.scssMain, paths.scssPartials];

gulp.task('browserSync', ['nodemon'], function() {
  browsersync.init({
    proxy: "http://localhost:3000",  // local node app address
    files: [
      paths.app
    ],
    port: 4000,
    reloadDelay: 1,
    browser: ['chrome'],
    notify: false
  });
});

gulp.task('nodemon', function (cb) {
  var called = false;
  return nodemon({
    script: 'app.js',
    watch: ['app.js']
  })
  .on('start', function () {
    if (!called) {
      called = true;
      cb();
    }
  })
});

gulp.task('stylelint',function(){
  if(isProduction){
    return gulp
    .src(paths.scssAll)
    .pipe(
      gulpStyleLint({
        reporters: [
          {formatter: 'string', console: true}
        ]
      })
    );
  }
})

gulp.task('styles', ['stylelint'], function() {

  //del(['./www/dist/css/bundledstyle.css'], function(err){

   // if(err){
    //  console.log('del error = ' + err);
   //   return;
    //}

    return gulp.src(paths.scssMain)
      .pipe(sourcemaps.init({
        loadMaps:true
      }))
      .pipe(scss())
      .pipe(autoprefixer({
        browsers: ['last 4 versions', '> 1%']
      }))
      /*.pipe(rename({suffix: '.min'}))*/
      .pipe(isProduction ? cleanCSS({
        restructuring: false,
        advanced: false // OTHERWISE REMOVES CSS THAT HAS VENDOR PREFIXES LIKE display: flex
      }) : gutil.noop())
      .pipe(sourcemaps.write('.',{
        sourceRoot: '.'
      }))
      .pipe(gulp.dest('./dist/css'))
      .pipe(browsersync.stream());
  //});

});


gulp.task('default', ['styles', 'browserSync'], function (){
  gulp.watch(paths.scssAll,['styles']);
  gulp.watch([paths.htm]).on('change', function() {
    reload();
  });
});
