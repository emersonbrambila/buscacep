const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactHotReloadPage = require("@pmmmwh/react-refresh-webpack-plugin");

const isDevelopment = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 4000;

module.exports = {
    mode: isDevelopment ? "development" : "production",
    resolve: {
      extensions: [".tsx", ".ts", ".js"]
    },
    entry: path.resolve(__dirname, "src", "index.tsx"),
    module: {
      rules: [
        {
          test: /\.(js|ts|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        }
      ]
    },
    devServer: {
      static: path.join(__dirname, "public"),
      historyApiFallback: true,
      hot: true,
      port: port
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js"
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "public", "index.html")
      }),
      isDevelopment && new ReactHotReloadPage()
    ].filter(Boolean)
  }