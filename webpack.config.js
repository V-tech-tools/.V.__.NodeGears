const path = require('path');

module.exports = {
  entry: {
      index: './[.v.]_dev_apps/_x1/SRC/index.js',
  },
	target: "web",
  output: {
    path: path.resolve(__dirname, '[.v.]_dev_apps/_x1/PUBLIC'),
    filename: 'v_pack.js',
  },
};