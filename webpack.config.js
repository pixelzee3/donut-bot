const path = require('path');

module.exports = {
  entry: {
    main: './src/main.js',
  },
  output: {
    filename: '[name].js',
    clean: true,
  },
};
