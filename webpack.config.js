const path = require("path");

module.exports = {
  entry: [path.join(__dirname, "src", "app.js")],

  output: {
    path: path.join(__dirname, "scripts"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        use: ["style-loader", "css-loader", "sass-loader"],

        test: /\.s?css$/,
      },
    ],
  },
  devtool: "eval-cheap-module-source-map",

  devServer: {
    static: path.join(__dirname, "scripts"),
    historyApiFallback: true,
    // This will keep rendering index.html on any route and let React decide on what route what should be displayed
  },
};
