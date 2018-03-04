# How to refresh browser automatically after updating the node server file.

## Date working
2018/03/04

## Operating system
- windows.

But should work also for linux. Though you might want to use live reload guard for that.
Though this is a universal solution for both windows and linux

## Disclaimer
After trying many combinations, of settings - browsersync reloadDelay, nodemon.restart, files to watch in browserSync or nodemon, the browser doesn't always refresh with the new data.

The sure way of solving this problem was to put a timeout in the gulp file below.
```javascript
gulp.task('default', ['browserSync'], function (){
  gulp.watch(arrWatchPaths).on('change', function (){
    setTimeout(reload, BROWSER_SYNC_REFRESH);
  });
});
```

## If browser is refreshing too quickly then increase this variable value:
BROWSER_SYNC_REFRESH = 1000;

## Inside app.js
Make sure that the html file returned is wrapped in html and body tags.
Otherwise browsersync will not inject it's script to reload the page.

# How to run
- clone this rep
- npm install
- yarn start
- make a change to the text hello world in app.js and see the changes refresh in the browser.
