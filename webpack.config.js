var webpack = require('webpack');
var path = require('path');

module.exports = {
		devtool: 'inline-source-map',
		entry: [
				'webpack-dev-server/client?http://127.0.0.1:8080/', // these two addresses is for hot reloading.
				'webpack/hot/only-dev-server',
				'./src'     // since there is no file name, webpack will automatically look for an index.js file.
		],
		output: {
				path:  path.join(__dirname, 'public'),
				filename: 'bundle.js'
		},
		resolve:  { // this is where webpack is going to be looking for the files to bundle together
				modulesDirectories: ['node_modules', 'src'],
				extensions: ['', '.js']
		},
		module: {
				loaders: [
				{
						test: /\.jsx?$/,
						exclude: /node_modules/,
						loaders: ["react-hot-loader/webpack", "babel?presets[]=react,presets[]=es2015"]
				}
				]
		},
		plugins: [
				new webpack.HotModuleReplacementPlugin(),
				new webpack.NoErrorsPlugin()
		]

};