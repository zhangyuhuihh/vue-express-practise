var ExtracTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
   css: ExtracTextPlugin.extract({
     use: 'css-loader',
     fallback: 'vue-style-loader'
   }),
   less: ExtracTextPlugin.extract('vue-style-loader', 'css!less')
}