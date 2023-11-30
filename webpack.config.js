const { merge } = require("webpack-merge");

const baseConfig = require("./webpackConfig/configs/baseWebpack.config");
const devConfig = require("./webpackConfig/configs/devWebpack.config");
const prodConfig = require("./webpackConfig/configs/prodWebpack.config");

module.exports = (env) => {
  const isProd = env.mode === "production";

  const config = isProd
    ? merge(baseConfig(env), devConfig(env))
    : merge(baseConfig(env), prodConfig());
  return config;
};
