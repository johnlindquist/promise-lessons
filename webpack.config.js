const webpack = require('webpack')
const config = {
    entry: {
        'app': ['./app']
    },
    output: {
        path: '/build',
        filename: './app.bundle.js',
        publicPath: '/build/'
    },
    plugins: [new webpack.ProvidePlugin({
        'regeneratorRuntime':'babel-runtime/regenerator'
    })],
    module: {
        loaders: [
            {test: /\.(js)$/, loader: 'babel-loader', query:{
                'presets': [
                    'es2015'
                ],
                'plugins': [
                    'transform-async-to-generator'
                ]
            }}
        ]
    }
}

module.exports = config;