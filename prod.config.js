var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js'
    },
    mode: 'development',
    watch: true,
    stats: {
        colors: true
    },
    devtool: 'source-map'
};