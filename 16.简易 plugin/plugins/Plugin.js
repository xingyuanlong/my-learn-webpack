class Plugin {
  constructor(options) {
    console.log('\nPlugin constructor: options', options + "\n");
    this.options=options;
  }
  apply(compiler) {
    compiler.hooks.emit.tapAsync('TxtPlugin', (compilation, callback) => {
      // 在生成文件中，创建一个头部字符串：
      let fileList = 'In this build:\n\n';

      // 遍历所有编译过的资源文件，
      // 对于每个文件名称，都添加一行内容。
      for (let filename in compilation.assets) {
        fileList += ('- ' + filename + '\n');
      }

      const { filename = "fileList.md" } = this.options;

      // 将这个列表作为一个新的文件资源，插入到 webpack 构建中：
      compilation.assets[filename] = {
        source: function () {
          return fileList;
        },
        size: function () {
          return fileList.length;
        }
      };

      callback()
    })
  }
}

module.exports = Plugin