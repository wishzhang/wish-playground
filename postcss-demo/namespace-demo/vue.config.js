const path = require("path");

module.exports = {
  devServer: {
    open: false,
    host: "0.0.0.0",
    port: "8022",
    https: false,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  pages: {
    index: {
      // 修改入口
      entry: "src/main.js",
      template: "public/index.html",
      filename: "index.html",
    },
  },
  css: {
    extract: true, //  [false 强制把css打包进入js内]
    // -----------------------
    // 当执行npm run lib:lcdp打包命令，会将样式文件的所有选择器的前面加上命名空间
    loaderOptions: {
      postcss: {
        postcssOptions: {
          plugins: [require('postcss-plugin-namespace')('.cockpit-ui-library')]
        }
      }
    },
    // -----------------------
  },
  configureWebpack: {
    output: {
      libraryExport: "default",
    },
  },
};

