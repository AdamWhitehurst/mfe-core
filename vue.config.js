const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    externals: {
      "@vasion/sidebar": "@vasion/sidebar",
      vue: "vue3",
    },
    devServer: {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      allowedHosts: "all",
      https: true,
    },
    output: {
      libraryTarget: "system",
    },
  },
  filenameHashing: false,
});
