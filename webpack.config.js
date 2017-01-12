module.exports = {
    context: __dirname + '/lib',
    entry: './vjs-quality-picker',
    output: {
        path: __dirname + '/dist',
        filename: 'vjs-quality-picker.js'
    },
    module: {
      loaders: [{
        exclude: /node_modules/,
        loader: 'babel-loader',
        test: /\.js$/
      }]
    }
};
