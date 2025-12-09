const path = require('path');
const CracoLessPlugin = require('craco-less');

//定义resolve函数，把当前目录 __dirname 和上传进来的目录 dir 拼接起来
//对于当前文件来说，当前目录就是项目根目录
const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin
    }
  ],
  webpack: {
    //配置别名
    alias: {
      '@': resolve('src'),
      components: resolve('src/components')
    }
  }
};
