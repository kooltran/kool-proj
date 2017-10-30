webpack = require('webpack');
module.exports = {
  entry: {
    'app' : './src/assets/js/app.js'
  },
	plugins: [
		new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: 'production'
      }
    }),
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
    })
	],
	module: {
		loaders: [{
			test: /.js?$/,
			loader: 'babel-loader',
			exclude: /node_modules/
		}]
	},
	output: {
		filename: 'app.js'
	},
	resolve: {
		alias: {
			vue: 'vue/dist/vue.js'
		}
	}
};
