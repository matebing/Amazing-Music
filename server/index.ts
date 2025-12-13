import express from 'express'
const app = express()

app.use((request, response, next) => {
  console.log('有人请求服务器了', request.get('Host'), request.url)
  next()
})

app.get('/images', (request, response) => {
  const images = [
    {
      url: 'https://img0.baidu.com/it/u=3217812679,2585737758&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
      documentCode: '',
      documentDesc: '身份证正面',
      documentType: ''
    }
  ]
  response.send(images)
})

app.get('/banner', (request, response) => {
  const result = {
    code: 200,
    message: 'success',
    data: [
      {
        imageUrl:
          'http://p1.music.126.net/M_kLc0WSEBFcMfU0mw==/109951160000651461.jpg',
        targetId: 0,
        adId: 'null',
        targetType: 3000,
        titleColor: 'blue',
        typeTitle: '数字专辑',
        url: 'https://music.163.com/store/newalbum/detail?id=153345099',
        exclusive: false,
        monitorImpress: 'null',
        monitorClick: 'null',
        monitorType: 'null',
        monitorImpressList: 'null',
        monitorClickList: 'null',
        monitorBlackList: 'null',
        extMonitor: 'null',
        extMonitorInfo: 'null',
        adSource: 'null',
        adLocation: 'null',
        adDispatchJson: 'null',
        encodeId: '0',
        program: 'null',
        event: 'null',
        video: 'null',
        song: 'null',
        scm: '1.music-homepage.homepage_banner_force.banner.606962.-2007825185.null',
        bannerBizType: 'force_banner'
      }
    ]
  }
  response.send(result)
})

app.listen(5000, () => {
  console.log('服务器1启动成功，请求地址：http://localhost:5000/images')
})
