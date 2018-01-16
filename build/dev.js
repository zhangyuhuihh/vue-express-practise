var express = require('express');
var path = require('path');
var webpack = require('webpack');
var webpackDevConfig = require('./webpack.dev.conf');
var opn = require('opn')
var app = express(); // 创建一个express实例
var compiler = webpack(webpackDevConfig); // 调用webpack并把配置传递过去
// 使用 webpack-hot-middleware 热重载
var hotMiddleware = require('webpack-hot-middleware')(compiler,{
    log: false,
    heartbeat: 2000
})

// 使用 webpack-dev-middleware 中间件
var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: '/',
  stats: {
    colors: true,
    chunks: false
  }
});
app.use(devMiddleware)
// 挂载热重载
app.use(hotMiddleware)
app.listen('8888')
opn('http://localhost:8888')