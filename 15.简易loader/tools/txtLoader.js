// txt-loader
// 根据options,来判断首字母大小写
const loaderUtils= require('loader-utils');

const defaultOptions = {
    toUpperCase: true,
    toLowerCase: false,
};

module.exports = function (source) {
    if (!source) {
        return source;
    }
    const options = Object.assign(
        defaultOptions,
        loaderUtils.getOptions(this) 
    );
    const { toUpperCase, toLowerCase }  = options;
    if (toUpperCase) {
        source = source.charAt(0).toUpperCase() + source.substring(1);
    }
    if (toLowerCase) {
        source = source.charAt(0).toLowerCase() + source.substring(1);  
    }
    // 文本要导出 否则会当成变量解析
    return `module.exports = '${source}'`;
};
