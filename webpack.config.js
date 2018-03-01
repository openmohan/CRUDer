

const path = require('path');

module.exports = {
  resolve : {
    modules: [
      path.resolve('./lib'),
      path.resolve('./node_modules')
    ]
  },
  devServer:{
    historyApiFallback: true

  },
    entry: './lib/components/renderers/dom.js',
    output: {
      path: path.resolve(__dirname, 'public'),
      filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    }
};
