const path = require('path')
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/erabbit-client-pc/' : '/',

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, './src/assets/styles/variables.less'),
        path.resolve(__dirname, './src/assets/styles/mixins.less')
      ]
    }
  }
})
