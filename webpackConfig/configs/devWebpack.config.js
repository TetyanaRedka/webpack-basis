const webpack = require("webpack");

module.exports = (env) => {
  const config = {
    plugins: [new webpack.ProgressPlugin()],

    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
      ],
    },

    devtool: "inline-source-map",
    devServer: {
      port: env.port ?? 4000,
      open: true,
    },
  };

  return config;
};
