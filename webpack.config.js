var webpack = require('webpack')
let config  =  require("./module.config")
module.exports = {
	entry: config.src.js ,
	output: {
    library       :  "[name]",
    libraryTarget :  "umd" ,
		path: __dirname + config.dist.js ,//'/public/dist/',
		publicPath: config.dist.js , //"/public/dist/",
		filename: '[name].js'
	},
	module: {
		loaders: [
		  	{
		      	test:/\.js$/,
		      	exclude:/node_modules/,
		      	loader: 'babel'
      	},
        {
          test:/\.vue$/,
          exclude:/node_modules/,
          loader: 'vue'
        },
		    {
		        test: /\.css$/,
		        loader: "style-loader!css-loader?modules"
		    }
        ,{ test: /\.less$/, loader: "style!css!less" }
		]
	},
	externals: [
    {
      jquery: {
        root: 'jQuery',
        commonjs2: 'jquery',
        commonjs: 'jquery',
        amd: 'jquery',
        seajs : "jquery"
      }
    }
    ,{
      underscore: {
        root: '_',
        commonjs2: 'underscore',
        commonjs: 'underscore',
        amd: 'underscore',
        seajs:"underscore"
      }
    }
    ,{
      'miss.react': {
        root: 'miss.react',
        commonjs2: 'miss.react',
        commonjs: 'miss.react',
        amd: 'miss.react',
        seajs : "miss.react"
      }
    }
    ,{
      'miss.vue': {
        root: 'miss.vue',
        commonjs2: 'miss.vue',
        commonjs: 'miss.vue',
        amd: 'miss.vue',
        seajs : "miss.vue"
      }
    }
    ,{
      vue: {
        root: 'Vue',
        commonjs2: 'vue',
        commonjs: 'vue',
        amd: 'vue',
        seajs:"vue"
      }
    }
    ,{
      miss: {
        root: 'miss',
        commonjs2: 'miss',
        commonjs: 'miss',
        amd: 'miss',
        seajs:"miss"
      }
    }
    ,{
      'react': {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react',
        seajs : "react"
      }
    },
    {
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom',
        seajs : "react-dom"
      }
    },
    {
      'react-router': {
        root: 'ReactRouter',
        commonjs2: 'react-router',
        commonjs: 'react-router',
        amd: 'react-router',
        seajs : "react-router"
      }
    },
    {
      'react-addons': {
        root: 'ReactAddons',
        commonjs2: 'react-addons',
        commonjs: 'react-addons',
        amd: 'react-addons',
        seajs : "react-addons"
      }
    },
    {
      'prototype': {
        root: 'prototype',
        commonjs2: 'prototype',
        commonjs: 'prototype',
        amd: 'prototype',
        seajs : "prototype"
      }
    },

    {
      'react-addons-css-transition-group': {
        root: ['React', 'addons', 'CSSTransitionGroup'],
        commonjs2: 'react-addons-css-transition-group',
        commonjs: 'react-addons-css-transition-group',
        amd: 'react-addons-css-transition-group',
        seajs: 'react-addons-css-transition-group'
      }
    }
  ],
	plugins: [
    new webpack.optimize.UglifyJsPlugin({compress: { warnings: false }}) 
		// ,new webpack.HotModuleReplacementPlugin()//热加载插件
	],
	resolve: {
	    extensions: ['', '.js', '.jsx','.less',".vue"]
	},
	devServer: {    
	    contentBase: "./public",//本地服务器所加载的页面所在的目录
	    colors: true,//终端中输出结果为彩色
	    historyApiFallback: true,//不跳转
	    inline: true//实时刷新
	} 
};