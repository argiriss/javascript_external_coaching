const path = require('path'); // libreria
module.exports = {
  entry: './src/index.js',
  output: {
      path: path.resolve(__dirname, 'public/js'), 
      filename: 'bundle.js'
},
mode: 'development'}