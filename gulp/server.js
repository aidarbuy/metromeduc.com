'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var browserSync = require('browser-sync');
var browserSyncSpa = require('browser-sync-spa');

var util = require('util');

var modRewrite = require('connect-modrewrite');
var proxyMiddleware = require('http-proxy-middleware');
// var historyApiFallback = require('connect-history-api-fallback');
// var proxy = proxyMiddleware('/api', {target: '/api'});
// var history = require('connect-history-api-fallback');

function browserSyncInit(baseDir, browser) {
  browser = browser === undefined ? 'default' : browser;

  var routes = null;
  if(baseDir === conf.paths.src || (util.isArray(baseDir) && baseDir.indexOf(conf.paths.src) !== -1)) {
    routes = {
      '/bower_components': 'bower_components'
    };
  }

  var server = {
    baseDir: baseDir,
    // middleware: proxyMiddleware.concat(historyApiFallback),
    // middleware: [
      // proxy,
      // modRewrite([
        // '!\\.\\w+$ /index.html [L]'
        // '^[^\\.]*$ /index.html [L]'
      // ])
    // ],
    routes: routes
  };

  /*
   * You can add a proxy to your backend by uncommenting the line below.
   * You just have to configure a context which will we redirected and the target url.
   * Example: $http.get('/users') requests will be automatically proxified.
   *
   * For more details and option, https://github.com/chimurai/http-proxy-middleware/blob/v0.9.0/README.md
   */
  // server.middleware = proxyMiddleware('/users', {target: 'http://jsonplaceholder.typicode.com', changeOrigin: true});
  // server.middleware = proxyMiddleware('/articles', {target: 'http://localhost:3000', changeOrigin: true});
  // server.middleware = proxyMiddleware('/articles', {target: 'http://localhost:3000/index.html', changeOrigin: true});
  // server.middleware = proxyMiddleware('/articles', {target: 'localhost:3000/index.html', changeOrigin: true});
  // server.middleware = proxyMiddleware('/articles', {target: '/index.html', changeOrigin: true});
  // server.middleware = proxyMiddleware('/articles', {target: '/', changeOrigin: true});
  // server.middleware = proxyMiddleware('/articles', {target: '/'});
  // server.middleware = proxyMiddleware('/articles', {target: '/index.html'});
  // server.middleware = proxyMiddleware('/articles', {target: 'localhost:3000/index.html'});
  server.middleware = proxyMiddleware('/article', {
    // target: 'http://localhost:3000/index.html', // target host
    // target: '/', // target host
    target: 'http://localhost:3000/', // target host
    // changeOrigin: true,               // needed for virtual hosted sites
    // ws: true,                         // proxy websockets
    pathRewrite: {
      // '^/old/api' : '/new/api'      // rewrite paths
      '/article' : '/'      // rewrite paths
    },
    // proxyTable: {
    //   // when request.headers.host == 'dev.localhost:3000',
    //   // override target 'http://www.example.org' to 'http://localhost:8000'
    //   'dev.localhost:3000' : 'http://localhost:8000'
    // }
  });

  browserSync.instance = browserSync.init({
    startPath: '/',
    server: server,
    browser: browser,
    open: false,
    notify: false
  });
}

browserSync.use(browserSyncSpa({
  selector: '[ng-app]'// Only needed for angular apps
}));

// browserSync.use(history({
//   rewrites: [
//     { from: '/\/article/', to: '/index.html' }
//   ]
// }));

gulp.task('serve', ['watch'], function () {
  browserSyncInit([path.join(conf.paths.tmp, '/serve'), conf.paths.src]);
});

gulp.task('serve:dist', ['build'], function () {
  browserSyncInit(conf.paths.dist);
});

gulp.task('serve:e2e', ['inject'], function () {
  browserSyncInit([conf.paths.tmp + '/serve', conf.paths.src], []);
});

gulp.task('serve:e2e-dist', ['build'], function () {
  browserSyncInit(conf.paths.dist, []);
});
