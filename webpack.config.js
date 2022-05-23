const path = require('path'); // libreria
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.js',
  output: {
      path: path.resolve(__dirname, 'public/js'), 
      filename: 'bundle.js'
  },
  plugins: [
    new Dotenv()
  ],
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
            'style-loader',
            'css-loader',
            'sass-loader'
        ]
      }
    ]
  }
}