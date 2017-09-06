var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var values = require('postcss-modules-values');

module.exports = {
    entry: __dirname + '/src/index.js',
    output: {
        publicPath: '/',
        filename: './public/bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['react-hot','babel'],
            exclude: /node_modules/,
        },{
            test: /\.css$/,
            loader: combineLoaders([
                {
                    loader: 'style-loader'
                },{
                    loader: 'postcss-loader'
                },{
                    loader: 'css-loader',
                    query: {
                        modules: true,
                        localIdentName: '[name]__[local]___[hash:base64:5]'
                    }
                }
            ])
        }]
    },
    postcss: [
        values
    ],
    plugins: [
        new ExtractTextPlugin("styles.css"),
    ]
};