const path = require('path');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/
      },
      {
        use: ['style-loader', 'css-loader'], //  rules apply from right to left
        test: /\.css$/
      }
    ]
  }
};

module.exports = config;