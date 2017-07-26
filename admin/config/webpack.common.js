const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const root = exports.root = (...paths) => path.join(__dirname, '..', ...paths);

exports.config = {
    entry: {
        app: root('src/app.ts'),
        vendor: root('src/vendor.ts'),
        polyfills: root('src/polyfills.ts'),
    },

    output: {
        path: root('../dist/admin'),
        filename: '[name].js',
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },

    module: {
        loaders: [
            { test: /.tsx?$/, loader: 'ts-loader', options: { configFileName: '../tsconfig.json' } }
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: root('src/index.html'),
        }),

        new webpack.HotModuleReplacementPlugin(),

        new webpack.optimize.CommonsChunkPlugin({
            name: ['main', 'vendor', 'polyfill'],
            minChunks: Infinity,
        })
    ],
};