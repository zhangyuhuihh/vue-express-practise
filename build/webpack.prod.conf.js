var path = require('path')
var webpack = require('webpack')
var webpackBaseConf = require('./webpack.base.conf')
var htmlebpackPlugin = require('html-webpack-plugin')
var merge = require('webpack-merge')
var hotClient = './build/hot-client'


var webpackProdConf = merge(webpackBaseConf, {
  plugins: [
    new webpack.NoErrorsPlugin()
  ]
})

module.exports = webpackProdConf