/* eslint-disable */
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const isDev = process.env.NODE_ENV !== 'production';

module.exports = {
    context: `${__dirname}/lib`,
    entry: './vjs-quality-picker',
    output: {
        path: `${__dirname}/dist`,
        filename: 'vjs-quality-picker.js'
    },
    module: {
      loaders: [{
        exclude: /node_modules/,
        loader: 'babel-loader',
        test: /\.js$/
      }]
    },
    plugins: isDev ? [] : [new UglifyJsPlugin({
        uglifyOptions: {
            compress: true,
            mangle: true
        }
    })],
    devServer: isDev ? {
      contentBase: __dirname,
      publicPath: '/dist/',
      inline: true,
      port: 8080,
    }: undefined,
};
