const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: "3361",
    hot: true,
    host: "0.0.0.0",
    historyApiFallback: true, //history路由错误问题
    client: {
      logging: "warn",
      overlay: {
        errors: false, //暂时关闭
        warnings: false,
      },
    },
    proxy: {
      "/vector-styles/mapbox/": {
        target: "https://it.gdeei.cn",
        changeOrigin: true, //是否跨域
        secure: true,
      },
    },
  },
})
