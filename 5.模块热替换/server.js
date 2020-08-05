const webpack = require("webpack");
const webpackDevServer = require("webpack-dev-server");

const config = require("./webpack.config");
const options = {
  contentBase: "./dist",
  hot: true,
  host: "localhost",
};

const compiler = webpack(config);

webpackDevServer.addDevServerEntrypoints(config, options);

const server = new webpackDevServer(compiler, options);

server.listen(5000, "localhost", () => {
  console.log("dev server listening on port 5000");
});
