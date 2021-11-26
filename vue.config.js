/*
 * @Description: 1.0
 * @Version: 1.0
 * @Autor: hs
 * @Date: 2021-11-08 09:51:45
 * @LastEditors: hs
 * @LastEditTime: 2021-11-19 20:29:23
 */
const path = require("path");
const TerserPlugin = require("terser-webpack-plugin"); // 引入插件
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@assets", resolve("src/assets"))
      .set("@style", resolve("src/style"))
      .set("@components", resolve("src/components"))
      .set("@views", resolve("src/views"))
      .set("@store", resolve("src/store"))
      .set("public", resolve("public"));
  },
  devServer: {
    hot: false,
    disableHostCheck: true,
    port: 9527,
    overlay: {
      warnings: false,
      errors: true,
    },
    // proxy: {
    //   "/api": {
    //     target: "http://192.168.8.221:9020",
    //     changeOrigin: true,
    //     pathRewrite: {
    //       "^/api": "/",
    //     },
    //   },
    // },
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  pluginOptions: {
    pwa: {
      iconPaths: {
        favicon32: "favicon.ico",
        favicon16: "favicon.ico",
        appleTouchIcon: "favicon.ico",
        maskIcon: "favicon.ico",
        msTileImage: "favicon.ico",
      },
    },
  },
  configureWebpack: {
    optimization: {
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            ecma: undefined,
            warnings: false,
            parse: {},
            compress: {
              drop_console: true,
              drop_debugger: true,
              pure_funcs: ["console.log", "debugger"], // 移除console,debugger
            },
          },
        }),
      ],
    },
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require("postcss-px2rem")({
            remUnit: 37.5,
          }),
        ],
      },
    },
  },
};
