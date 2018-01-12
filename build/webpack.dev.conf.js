var path = require('path')
var webpack = require('webpack')
var webpackBaseConf = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var merge = require('webpack-merge')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
var hotClient = './build/hot-client'


var webpackDevConf = merge(webpackBaseConf, {
  // entry: {
  //   index: [
  //     path.resolve(__dirname, '../src/main.js')
  //   ]
  // },
  // base里面有了entry，这里就不能有了
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new FriendlyErrorsPlugin()
  ]

})

Object.keys(webpackDevConf.entry).forEach(function (name) {
  webpackDevConf.entry[name] = hotClient.concat(webpackDevConf.entry[name])
})
module.exports = webpackDevConf