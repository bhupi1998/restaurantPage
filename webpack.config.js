const path = require('path');

module.exports = {
  mode:'development', //main js file is more readable in development. Production uglifies it.
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  watch:true,
};