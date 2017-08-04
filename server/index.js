const express           = require('express')
const server            = require('express')()
const webpackMiddleware = require("webpack-dev-middleware");
const config            = require('../webpack.config.js')
const webpack           = require("webpack");
const path              = require('path');
const compiler          = webpack(config);

server.use(webpackMiddleware(compiler, {
  noInfo: false,
  quiet: false,
  lazy: false,
  watchOptions: {
    aggregateTimeout: 300,
    poll: true
  },
  publicPath: "/assets",
  index: "index.html",
  headers: { "X-Custom-Header": "yes" },
  mimeTypes: { "text/html": ["phtml"] },
  stats: {
    colors: true
  },
  reporter: null,
  serverSideRender: true,
  log: console.log // eslint-disable-line no-console
}));

server.use(require("webpack-hot-middleware")(compiler));
server.use(require('./ssr.js').default);
server.use('', express.static(path.resolve(process.cwd(), 'dist')));

server.listen(3005, () => { //  eslint-disable-line no-magic-numbers
  console.log(`Server listening on: '${3005}`); // eslint-disable-line no-console, no-magic-numbers
});