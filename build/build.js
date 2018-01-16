var express = require('express');
var path = require('path');
var webpack = require('webpack');
var webpackProdConfig = require('./webpack.prod.conf');
console.log(webpackProdConfig.module.rules)
// var opn = require('opn')
// var app = express(); // 创建一个express实例
webpack(webpackProdConfig); // 调用webpack并把配置传递过去
// 使用 webpack-hot-middleware 热重载
// var hotMiddleware = require('webpack-hot-middleware')(compiler,{
//     log: false,
//     heartbeat: 2000
// })

// 使用 webpack-dev-middleware 中间件
// var devMiddleware = require('webpack-dev-middleware')(compiler, {
//   publicPath: '/',
//   stats: {
//     colors: true,
//     chunks: false
//   }
// });
// app.use(devMiddleware)
// app.use(hotMiddleware)
// app.listen('8888')
// opn('http://localhost:8888')
webpack(webpackProdConfig, function (err, stats) { //后面的回调一定需要，否则不执行，官方api可以看到
  // 构建成功
  // 停止loading动画
  // spinner.stop()
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n\n')
// 打印提示
  // if (stats.hasErrors()) {
  //   console.log(chalk.red('  Build failed with errors.\n'))
  //   process.exit(1)
  // }

  // console.log(chalk.cyan('  Build complete.\n'))
  // console.log(chalk.yellow(
  //   '  Tip: built files are meant to be served over an HTTP server.\n' +
  //   '  Opening index.html over file:// won\'t work.\n'
  // ))
})