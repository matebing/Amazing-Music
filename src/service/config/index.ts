export const TIME_OUT = 10000

export const BASE_URL = 'http://localhost:3000/'

console.log('当前环境', process.env.REACT_APP_BASE_URL)
// 通过node提供的process获取当前环境
// let BASE_URL = ''
// if (process.env.NODE_ENV === 'development') {
//   BASE_URL = 'http://localhost:3000/'
// } else {
//   BASE_URL = 'http://localhost:3000/'
// }
// export { BASE_URL }

// 通过环境变量配置文件获取，必须以REACT_APP_开头
//process.env.REACT_APP_BASE_URL
