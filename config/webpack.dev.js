/* eslint-disable @typescript-eslint/no-var-requires */

const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
	mode: "development",
	devtool: "eval",
	devServer: {
		historyApiFallback: true,
		port: 3000,
		hot: true,
	},
});
