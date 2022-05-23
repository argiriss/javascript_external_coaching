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