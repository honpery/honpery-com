const merge = require('webpack-merge');
const { root, config } = require('./webpack.common');

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