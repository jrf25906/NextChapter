const createExpoWebpackConfigAsync = require("@expo/webpack-config");

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  // Add polyfill for import.meta
  config.module.rules.push({
    test: /\.m?js$/,
    resolve: {
      fullySpecified: false,
    },
  });

  // Add define plugin to handle import.meta
  const webpack = require("webpack");
  config.plugins.push(
    new webpack.DefinePlugin({
      "import.meta": "undefined",
    }),
  );

  return config;
};
