const path = require('path');
const MyPlugin= require('./plugins/MyPlugin');
const Plugin=require('./plugins/Plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname,"dist"),
    },
    plugins: [
        new MyPlugin({toUpperCase: true}),
        new Plugin({filename: 'buildList.md'}),
    ],
};