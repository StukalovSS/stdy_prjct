import { merge } from "webpack-merge";
import { common } from "./webpack.config.mjs";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const plugins = [
  new MiniCssExtractPlugin({
    filename: "[name].[contenthash].css",
  }),
];

const config = merge(common, {
  mode: "development",
  target: "web",
  plugins,
  devtool: "inline-source-map",
  output: {
    filename: "[name].[contenthash].js",
  },
});

export default config;