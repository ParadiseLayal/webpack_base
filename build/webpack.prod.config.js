const commonConfig = require('./webpack.base.config');


const {smart:merge} = require('webpack-merge')



const prodConfig = {
  node: 'prod'
}


module.exports = merge(commonConfig, prodConfig)