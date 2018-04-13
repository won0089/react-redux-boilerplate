const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/app/index.jsx'
    },
    resolve: {
        extensions: ['.jsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react'],
                        plugins: ['transform-object-rest-spread']
                    }
                },
                exclude: ['node_modules']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: './src/app/index.html',
            files: {
                js: ['bundle.js']
            }
        })
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};
