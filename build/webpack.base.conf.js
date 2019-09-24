const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  root: path.join(__dirname, '../'),
  src: path.join(__dirname, '../src'),
  project: path.join(__dirname, '../src/beer_project'),
  dist: path.join(__dirname, '../dist'),
  assets: 'assets/',
};

module.exports = {
  externals: {
    paths: PATHS,
  },
  entry: {
    app: path.join(PATHS.src, 'index.jsx'),
  },
  output: {
    filename: `${PATHS.assets}js/[name].[hash].js`,
    path: PATHS.dist,
    publicPath: '/',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /node_modules/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
        query: {
          presets: ['@babel/env', '@babel/react'],
        },
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'postcss-loader',
            options: { sourceMap: true, config: { path: `${PATHS.root}/postcss.config.js` } },
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'postcss-loader',
            options: { sourceMap: true, config: { path: `${PATHS.root}/postcss.config.js` } },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${PATHS.src}/index.html`,
      filename: './index.html',
      inject: true,
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
