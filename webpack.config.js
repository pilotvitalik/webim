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
				test: /\.less$/,
				use: [
						'style-loader',
						'css-loader',
						'less-loader'
				]
			},
			{
      			test: /\.(jpe?g|png|gif|svg)$/i,
      			use: [
			        'url-loader?limit=10000',
			        'img-loader'
			      ]
			    },
			   {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
		]
	}
};

module.exports = conf;