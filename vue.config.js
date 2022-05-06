const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //取消map文件生成
  // productionSourceMap:false,
  // 关闭ESLINT校验工具
  lintOnSave: false,
  devServer:{
    proxy:{
      '/api':{
        target:'http://gmall-h5-api.atguigu.cn',
        changeOrigin:true
      }
    }
  },
  publicPath:'./'
})