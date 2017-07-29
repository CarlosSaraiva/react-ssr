const express = require('express')
const app = express()
const webpackMiddleware = require("webpack-dev-middleware");
const config = require('../webpack.config.js')
const webpack = require("webpack");
const path = require('path');
const server = require('./server.js')

const compiler = webpack(config)

app.use(webpackMiddleware(compiler, {
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
	mimeTypes: { "text/html": [ "phtml" ] },
	stats: {
		colors: true
	},
	reporter: null,
	serverSideRender: true,
	log: console.log	
}));

app.use(require("webpack-hot-middleware")(compiler));

app.use((req, res) => {

	res.send(`
    <html>
      <head>
        <title>My App</title>
      </head>
      <body>
        <div id="root"></div>
      </body>
      <script src="assets/app.bundle.js"></script>
    </html>		
	`)

})

app.listen(3005, function () {
  console.log('Server listening on: ' + 3005);
});