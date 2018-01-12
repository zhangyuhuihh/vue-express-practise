// 动态项入口配置中注入webpack-hot-middleware/client
var hotClient = require('webpack-hot-middleware/client')
// 订阅事件，当event。zction === ‘reload’时执行页面刷新
hotClient.subscribe(function (event) {
  if (event.action === 'reload') {
    window.loacation.reload()
  }
})