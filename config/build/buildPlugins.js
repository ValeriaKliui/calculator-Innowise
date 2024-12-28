const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = function buildPlugins({ paths }) {
  const { html } = paths;

  return [
    new HtmlWebpackPlugin({
      template: html,
    }),
  ];
};