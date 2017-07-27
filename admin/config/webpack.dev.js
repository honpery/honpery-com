const merge = require('webpack-merge');
const config = require('./webpack.common');
const { root } = require('../helper');

module.exports = merge(config, {
    devtool: 'source-map',
    devServer: {
        // contentBase: root('../dist/admin'),
        compress: true,
        port: 9300,
        historyApiFallback: true,
        host: '0.0.0.0',
        hot: true,
    }
});