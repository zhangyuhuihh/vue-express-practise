var path = require('path')
var webpack = require('webpack')
var webpackBaseConf = require('./webpack.base.conf')
var htmlebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var merge = require('webpack-merge')
var prodExtractLoader = require('./vue-loader.conf')
var hotClient = './build/hot-client'

// merge.smart方法，去除与webpack.base.conf.js中rules重复的部分
// 生产环境打包css，开发环境不打包
var webpackProdConf = merge.smart(webpackBaseConf, {
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options:{
          loaders: prodExtractLoader
        } 
      }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    // 生产环境下生成style。css
    new ExtractTextPlugin('/static/style.css')

  ]
})

module.exports = webpackProdConf