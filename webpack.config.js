var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: {
        javascript: './app/js/app.js'
    },

    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist'
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: [
                    path.resolve(__dirname, '/node_modules/')
                ],
                loaders: ['react-hot-loader', 'babel-loader']
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    },

    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },

    plugins: [HTMLWebpackPluginConfig]
};