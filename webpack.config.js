const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.join(__dirname,'dist'),
    filename: 'main.bundle-[fullhash].js'
  },
  
  mode: process.env.NODE_ENV || 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.s?css$/, // archivos .css o .scss
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          name: 'static/media/[name].[hash:8].[ext]',
        },
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.join(__dirname,'public','index.html'),
      filename: 'index.html'
    }),
    new CleanWebpackPlugin(),
  ]
};