let path = require('path');

let conf = {
	entry: './src/index.js',
	output:{
		path: path.resolve(__dirname,'./dist'),
		filename: 'main.js',
		publicPath: 'dist/'
	},
	devServer:{
		overlay: true
	},
	module:{
		rules:[
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: '/node_modules/'
			},
			{
				test: /\.css$/,
				use: [
						'style-loader',
						'css-loader',
						'less-loader'
				]
			},
		]
	},
	plugins: [
			new MergeIntoSingleFilePlugin({
				files: {
					 "vendor.css": [
					 	"css/dinamic.css",
					 	"css/afterInst_services_mob.css",
					 	"css/afterInst_service.css",
					 	"css/easyInst_installHTML_installApp.css",
					 	"css/background_header_footerAll.css",
					 	"css/header_install.css",
					 	"css/style.css",
					 	]
					}
				})
			],
};

module.exports = conf;