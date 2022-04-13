const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';
const IS_PROD = NODE_ENV === 'production';

function setupDevtool() {
  if (IS_DEV) return 'eval';
  if (IS_PROD) return false;
}

module.exports = {
  resolve: {
    extensions: ['.jsx', '.js', '.ts', '.tsx', '.json', '.scss'],
    alias: {
      '@config': path.resolve(__dirname, './config.js'),
      // '@src': path.resolve(__dirname, './src'),
    },
  },
  mode: NODE_ENV ? NODE_ENV : 'development',
  entry: path.resolve(__dirname, './src/index.jsx'),

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js',
  },

  module: {
    rules: [
      {
        test: /.[tj]sx?$/,
        use: ['ts-loader'],
      },

      {
        test: /\.scss$/i,
        use: [
          IS_DEV ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },

      {
        test: /\.html$/,
        use: 'html-loader',
      },

      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
      },

      {
        test: /\.(png|jpg|jpeg|gif|woff2?)$/i,
        type: 'asset/resource',
      },
    ],
  },

  plugins: [
    new Dotenv(),
    new CleanWebpackPlugin(),

    new MiniCssExtractPlugin({
      filename: 'styles_[contenthash].css',
    }),

    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
    }),

    new SpriteLoaderPlugin(),

    new FaviconsWebpackPlugin({
      logo: './src/favicon.svg',
      favicons: {
        icons: {
          windows: false,
          appleIcon: false,
          appleStartup: false,
          android: false,
          coast: false,
          yandex: false,
          firefox: false,
        },
      },
    }),
  ],

  devtool: setupDevtool(),

  devServer: {
    port: 3000,
    hot: IS_DEV,
  },
};
