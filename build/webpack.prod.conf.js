var path = require('path')
var webpack = require('webpack')
var webpackBaseConf = require('./webpack.base.conf')
var htmlebpackPlugin = require('html-webpack-plugin')
var merge = require('webpack-merge')
var prodExtractLoader = require('./vue-loader.conf')
var hotClient = './build/hot-client'
var ExtractTextPlugin = require('extract-text-webpack-plugin')

// 外部css文件的输出
var ExtractRootCss = new ExtractTextPlugin({
  filename: 'styles/root.css',
  allChunks: false
})

// 内部css提取出来之后的文件输出
var ExtractVueCss = new ExtractTextPlugin({
  filename: 'styles/[name]/style.css',
  allChunks: true
})

// merge.smart方法，去除与webpack.base.conf.js中rules重复的部分
// 生产环境打包css，开发环境不打包
var webpackProdConf = merge.smart(webpackBaseConf, {
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders:{
           'css': ExtractVueCss.extract({
              use: ['css-loader'],
              fallback: 'vue-style-loader'
            })
          } 
        }
      },
      {
        test: /\.css$/,
        loader: ExtractRootCss.extract({
                use: ['css-loader'],
                fallback: 'vue-style-loader'
              })
      }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    // 生产环境下生成style。css
    ExtractRootCss,
    ExtractVueCss
  ]
})

module.exports = webpackProdConf