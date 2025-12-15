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
          'https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/77101429321/449d/f065/6c28/918ef034fd9c12adf3148b724f0bbf62.jpeg?imageView&quality=89',
        targetId: 0,
        adId: 'null',
        targetType: 3000,
        titleColor: 'blue',
        typeTitle: '数字专辑1',
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
      },
      {
        imageUrl:
          'https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/77101396017/cada/5f1b/f8a0/4d0e1dd77d1f5a8aa3f3ab29401e8e83.jpg?imageView&quality=89',
        targetId: 0,
        adId: 'null',
        targetType: 3000,
        titleColor: 'blue',
        typeTitle: '数字专辑2',
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
      },
      {
        imageUrl:
          'https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/77055442814/6c7f/a776/c6e3/1881386e837b5a847be243614db49115.jpg?imageView&quality=89',
        targetId: 0,
        adId: 'null',
        targetType: 3000,
        titleColor: 'blue',
        typeTitle: '数字专辑3',
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

app.get('/hot/recommend', (request, response) => {
  const result = {
    code: 200,
    messge: 'success',
    data: [
      {
        id: 2218171336,
        type: 0,
        name: '后来你哭了，想安慰却忘了早已换了身份',
        copywriter: '',
        picUrl:
          'http://p2.music.126.net/uFTzvFBkbTiK86AgiptL2w==/109951172237383791.jpg?param=140y140',
        canDislike: true,
        trackNumberUpdateTime: 1663237997419,
        playCount: 51777632,
        trackCount: 35,
        highQuality: false,
        alg: 'alg_high_quality'
      },
      {
        id: 3865036,
        type: 0,
        name: '最陈奕迅·精选',
        copywriter: '',
        picUrl:
          'http://p1.music.126.net/DuKyLyYhKd2YhWsRYkd9DQ==/109951172287476927.jpg?param=140y140',
        canDislike: true,
        trackNumberUpdateTime: 1663574893919,
        playCount: 34498292,
        trackCount: 302,
        highQuality: false,
        alg: 'alg_high_quality'
      },
      {
        id: 645384312,
        type: 0,
        name: '不得了！这些英文歌的热评信息量好大……',
        copywriter: '',
        picUrl:
          'http://p2.music.126.net/LGc-Y2eim_JgSj6qcATRsA==/109951172110343066.jpg?param=140y140',
        canDislike: true,
        trackNumberUpdateTime: 1515554115534,
        playCount: 31463236,
        trackCount: 63,
        highQuality: true,
        alg: 'alg_high_quality'
      },
      {
        id: 330634870,
        type: 0,
        name: '「国语古风中国风神曲，细腻地抚摸你的耳膜」',
        copywriter: '',
        picUrl:
          'http://p1.music.126.net/lvsT8Exg69-IUE8KPNJ9FA==/109951172253353369.jpg?param=140y140',
        canDislike: true,
        trackNumberUpdateTime: 1663166156004,
        playCount: 51103128,
        trackCount: 183,
        highQuality: false,
        alg: 'alg_high_quality'
      },
      {
        id: 669993197,
        type: 0,
        name: '「能歌能晃」华语说唱天花板2.0',
        copywriter: '',
        picUrl:
          'http://p1.music.126.net/ZQYW6apajpFizqmtu9irFA==/109951169852459884.jpg?param=140y140',
        canDislike: true,
        trackNumberUpdateTime: 1606511624538,
        playCount: 22594984,
        trackCount: 167,
        highQuality: false,
        alg: 'alg_high_quality'
      },
      {
        id: 2577388187,
        type: 0,
        name: 'Future Beats 💚 糟糕，是心动的感觉！',
        copywriter: '',
        picUrl:
          'http://p1.music.126.net/tfhTGU4ISH_6boU5OsBUmA==/109951169949548289.jpg?param=140y140',
        canDislike: true,
        trackNumberUpdateTime: 1554535653444,
        playCount: 42089900,
        trackCount: 50,
        highQuality: true,
        alg: 'alg_high_quality'
      }
    ]
  }
  response.send(result)
})

app.listen(5000, () => {
  console.log('服务器1启动成功，请求地址：http://localhost:5000/images')
})
