const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer')

const CSSModuleLoader = {
  loader: 'css-loader',
  options: {
    modules: true
  }
}

const CSSLoader = {
  loader: 'css-loader',
  options: {
    modules: false
  }
}

const postCSSLoader = {
  loader: 'postcss-loader',
  options: {
    ident: 'postcss',
    sourceMap: true,
    plugins: () => [
      autoprefixer()
    ]
  }
}


const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name]/[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      }, {
        test: /\.(scss|css)$/,
        exclude: /\.module\.scss$/,
        use: [
          isDev ? { loader: 'style-loader' } : { loader: MiniCssExtractPlugin.loader, options: { publicPath: '../' } },
          CSSLoader,
          'sass-loader',
          postCSSLoader
        ]
      }, {
        test: /\.module\.scss$/,
        use: [
          isDev ? { loader: 'style-loader' } : { loader: MiniCssExtractPlugin.loader, options: { publicPath: '../' } },
          CSSModuleLoader,
          'sass-loader',
          postCSSLoader
        ]
      }, {
        test: /\.(png|jpg|gif|ico|svg)$/,
        use: [
          'file-loader?name=./images/[name].[ext]',
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              optipng: {
                enabled: false,
              },
              svgo: {
                enabled: true,
              },
              pngquant: {
                quality: [0.85, 0.9],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 85,
              },
            },
          }
        ],
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader?name=./vendor/fonts/[name].[ext]&publicPath=../',
      },
    ],
  },
  devServer: {
    proxy: {
      '/api': 'http://localhost:3000'
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name]/[name].[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/index.html',
      filename: './index.html',
    }),
    new WebpackMd5Hash(),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: cssnano,
      cssProcessorPluginOptions: {
        preset: ['default']
      },
      canPrint: true
    })
  ]
}
