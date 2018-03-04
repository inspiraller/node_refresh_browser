# solution
ensure the html being sent to the user has <html><body> wrapping content, so browserSync knows to inject the script into the page.,

# Trying to watch changes and reload browser
http://pm2.keymetrics.io/docs/usage/watch-and-restart/
https://www.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/

# to look into
https://www.airpair.com/node.js/posts/top-10-mistakes-node-developers-make

# see all running processes
netstat -ano | find "LISTENING" | find "8080"

# Kill all processes
taskkill /f /im node.exe

# interesting  - spawn, exec nextTick
https://dzone.com/articles/understanding-execfile-spawn-exec-and-fork-in-node

# nodemon additional json
https://medium.com/netscape/nodemon-events-run-tasks-at-server-start-restart-crash-exit-93a34c54dfd8

# gulp and browsersync and nodemon Example
https://gist.github.com/dstroot/22525ae6e26109d3fc9d
https://bl.ocks.org/sogko/b53d33d4f3b40d3b4b2e
