const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: "development",
	entry: path.join(__dirname, "src", "index.js"),
	output: {
		path: path.join(__dirname, "dist"),
		filename: "bundle.js",
	},
<<<<<<< HEAD
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: "babel-loader",
				include: path.join(__dirname, "src"),
				exclude: /node_modules/,
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, "src", "index.html"),
			filename: "index.html",
		}),
	],
	devServer: {
		port: 8000,
		static: path.join(__dirname, "dist"),
	},
=======
	plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
      filename: 'index.html'
    })
  ],
>>>>>>> 8d56315304bc1b54d84a500aac6c7a959815806a
}