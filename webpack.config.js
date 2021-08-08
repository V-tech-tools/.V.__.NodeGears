const path = require('path');

module.exports = {
  entry: {
      index: './[_.V._]/web_src/index.js',
  },
  output: {
    path: path.resolve(__dirname, '[_.V._]/web'),
    filename: 'v_pack.js',
  },
};