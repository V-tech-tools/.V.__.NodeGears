const path = require('path');

module.exports = {
  entry: {
		index: './[.v.]_dev_apps/_x1/SRC/index.js',
		//v_cursor: './[.v.]_dev_apps/_x1/SRC/helpers/v_cursor.js',
  },
	target: "web",
  output: {
    path: path.resolve(__dirname, '[.v.]_dev_apps/_x1/PUBLIC'),
    filename: '[name].v_pack.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};