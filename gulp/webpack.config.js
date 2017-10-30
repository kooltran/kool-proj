const baseWebpackConfig = require('./webpack.config.base'),
merge = require('webpack-merge');

module.exports = merge(baseWebpackConfig, {
  devtool: 'source-map',
});
