const path = require('path')

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('@imgs', path.resolve(__dirname, 'src/assets/images'))
  },
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        // @/ 是 src/ 的别名
        includePaths: ['src/assets/styles'],
        data: `@import "variables.scss";`
      }
    }
  }
}
