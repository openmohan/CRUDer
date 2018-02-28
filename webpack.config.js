var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'lib');

var config = {
  entry: APP_DIR + '/components/renderers/dom.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  resolve : {
  modules: [
    path.resolve('./lib'),
    path.resolve('./node_modules')
  ]
},
devServer: {
  historyApiFallback: true,
},
  module : {
  rules : [
    {
      test : /\.jsx?/,
      include : APP_DIR,
      use : 'babel-loader'
    }
  ]
}
};

module.exports = config;
