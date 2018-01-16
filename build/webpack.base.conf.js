// https://www.jianshu.com/p/2e65ac138df6
// https://www.jianshu.com/p/1696e256d774
// nodejs 中的path模块
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var webpackBaseConf = {
  // 入口文件，path.resolve()方法，可以结合我们给定的两个参数最后生成绝对路径，最终指向的就是我们的index.js文件 
  entry: {
    index: [path.resolve(__dirname, '../src/main.js')]
  },
  // 输出配置 
  output: { // 输出路径是 myProject/output/static
    path: path.resolve(__dirname, '../output'),
    publicPath: '/',
    filename: '[name].[hash].js'
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      'vue': 'vue/dist/vue.js'
    } // 设置别名vue1不需要设置，vue2必须设置 否则会报错 
  },
  module: {
    rules: [
      // 使用vue-loader 加载 .vue 结尾的文件   
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../index.html'),
      inject: true
    })
  //   // new webpack.HotModuleReplacementPlugin()
  ]
};
// 热重载相关,只需要在开发环境进行
// Object.keys(webpackConf.entry).forEach(function (name) {
//   webpackConf.entry[name] = ['./build/hot-client'].concat(webpackConf.entry[name])
// })
module.exports = webpackBaseConf;