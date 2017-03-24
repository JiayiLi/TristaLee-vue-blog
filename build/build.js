require('./check-versions')()

process.env.NODE_ENV = 'production'

var ora = require('ora') // 一个很好看的 loading 插件
var rm = require('rimraf')
var path = require('path')
var chalk = require('chalk')
var webpack = require('webpack')  // 加载 webpack
var config = require('../config') // 加载 config.js
var webpackConfig = require('./webpack.prod.conf') // 加载 webpack.prod.conf

var spinner = ora('building for production...') // 使用 ora 打印出 loading + log
spinner.start()  // 开始 loading 动画

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  //开始 webpack 的编译
  webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})
