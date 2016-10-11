var path = require('path');

module.exports = {
  entry: {
    app: './src',
    vendor: ['react', 'react-dom']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: "[name].js"
  },
  module: {
    loaders: [
      {
        test: /.js$/,
        loader: "babel-loader"
      }
    ]
  }
};
