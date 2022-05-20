const path = require('path'); // libreria
module.exports = {
  entry: './src/index.js',
  output: {
      path: path.resolve(__dirname, 'public/js'), 
      filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
         test: /\.(js|jsx)$/,
         exclude: /node_modules/,
         use: ['babel-loader']
      },
      {
         test: /\.(s(a|c)ss)$/,
         use: ['style-loader','css-loader', 'sass-loader']
      }
    ]
  }
}