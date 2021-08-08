const path = require('path');

module.exports = {
  entry: {
      index: './[.v.]_dev_apps/x1/SRC/index.js',
  },
  output: {
    path: path.resolve(__dirname, '[.v.]_dev_apps/x1/PUBLIC'),
    filename: '[name].v_pack.js',
  },
};