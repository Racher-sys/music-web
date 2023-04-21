//  craco （一个对 create-react-app 进行自定义配置的社区解决方案）
const path = require('path');
const resolve = (dir) => path.resolve(__dirname, dir);
const CracoLessPlugin = require('craco-less');
module.exports = {
    plugins: [{ plugin: CracoLessPlugin }],
    webpack: {
        alias: {
            "@": resolve('src')
        }
    }
};
