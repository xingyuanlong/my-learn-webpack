const path = require('path');




module.exports = {
    mode: 'development',
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.js/,
                use: [
                    {
                        loader: path.resolve(__dirname,'tools/loader.js'),
                    },
                ],
            },
            {
                test: /\.txt/,
                use: [
                    {
                        loader: path.resolve(__dirname,'tools/txtLoader.js'),
                        options: {
                            toUpperCase: true, 
                        },
                    },
                ],
            }
        ],
    },
};

