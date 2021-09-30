const commonConfig = require('./webpack.base.config');


const {smart:merge} = require('webpack-merge')



const devConfig = {
  node: 'development'
}


module.exports = merge(commonConfig, devConfig)