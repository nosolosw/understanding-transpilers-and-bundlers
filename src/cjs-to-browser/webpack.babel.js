const path = require('path');

module.exports = {
  entry: './src/cjs-to-browser/input.js',
  output: {
    filename: './src/cjs-to-browser/output.webpack.babel.js',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
    modules: [path.resolve(__dirname)],
  },
};
