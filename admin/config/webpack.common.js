const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { root, isProd } = require('../helper');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: isProd(),
});

module.exports = {
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

            {
                test: /\.ts$/,
                loaders: [

                    {
                        loader: 'awesome-typescript-loader',
                        options: { configFileName: root('tsconfig.json') }
                    },
                ].concat(isProd() ? [] : '@angularclass/hmr-loader')
            },

            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }],
                    fallback: "style-loader"
                })
            }
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: root('src/index.html'),
        }),

        new webpack.HotModuleReplacementPlugin(),

        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills'],
            minChunks: Infinity,
        }),

        extractSass,
    ],
};