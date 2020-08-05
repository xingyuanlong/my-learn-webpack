const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname,"dist"),
    },
    plugins: [
        new webpack.ProvidePlugin({
            // _: 'lodash',
            join: ['lodash', 'join'],
        }),
    ],
    module: {
        rules: [
            {
                test: require.resolve('./src/index.js'),
                use: [
                    {
                      loader: 'imports-loader',
                      options: {
                        wrapper: 'window',
                      },
                    },
                  ],
            },
        ],
    },
};