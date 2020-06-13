// 取自npm命令
// mock dev prod 对应项目目录下 .env.dev .env.mock .env.prod 文件
export default process.env.VUE_APP_ENV || 'mock'