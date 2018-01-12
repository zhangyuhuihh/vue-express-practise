var path = require('path')
var webpack = require('webpack')
var webpackBaseConf = require('./webpack.base.conf')
var htmlebpackPlugin = require('html-webpack-plugin')
var merge = require('webpack-merge')
var hotClient = './build/hot-client'


var webpackDevConf = merge(webpackBaseConf, {
  entry: {
    index: [
      hotClient,
      path.resolve(__dirname, '../src/main.js')
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
})

Object.keys(webpackDevConf.entry).forEach(function (name) {
  webpackDevConf.entry[name] = hotClient.concat(webpackDevConf.entry[name])
})
module.exports = webpackDevConf