const path = require("path");


module.exports = {
  context: __dirname,
  entry: "./frontend/Furnitsy.jsx",
  output: {
    path: path.resolve(__dirname, "app", "assets", "javascripts"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".ts", ".tsx" ],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env", "@babel/react"],
          },
        },
      },
    ],
  },
  devtool: "source-map",
  mode: "development",
};
