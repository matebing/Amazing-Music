import express from 'express'
const app = express()

app.use((request, response, next) => {
  console.log('有人请求服务器了', request.get('Host'), request.url)
  next()
})

//图片列表
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

//轮播图
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

//热门推荐
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
      },
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
      }
    ]
  }
  response.send(result)
})

//新碟上架
app.get('/newest/albums', (request, response) => {
  const result = {
    code: 200,
    message: 'success',
    data: [
      {
        newAlbum: true,
        id: 153778832,
        name: 'すずめの戸締まり',
        artistName: 'RADWIMPS/陣内一真',
        picUrl:
          'http://p2.music.126.net/ZLunCTp4RRnu7N8lGVw4Fw==/109951172372358346.jpg?param=100y100',
        price: 30,
        customPriceConfig: null,
        coverUrl:
          'http://p2.music.126.net/D1SFObeLsaW_KMojcJZquw==/10995116799320860.jpg',
        pubTime: 1666868400771,
        productId: 0,
        saleNum: 0,
        topFans: null,
        albumType: 0,
        area: 8,
        artistType: 0,
        status: 0
      },
      {
        newAlbum: true,
        id: 153227407,
        name: '5522',
        artistName: '安溥 anpu',
        picUrl:
          'http://p2.music.126.net/Sp4-nb2K1u6R-GCDnqrXyw==/109951172440327463.jpg?param=100y100',
        price: 30,
        customPriceConfig: null,
        coverUrl:
          'http://p2.music.126.net/FATAg3PF9fO5DuWjTtHUxw==/10995116796156160.jpg',
        pubTime: 1666868400728,
        productId: 0,
        saleNum: 0,
        topFans: null,
        albumType: 0,
        area: 7,
        artistType: 0,
        status: 0
      },
      {
        newAlbum: true,
        id: 153225520,
        name: '减韵文音·胡笳十八拍',
        artistName: '朝简/史弘弘/窦唯',
        picUrl:
          'http://p2.music.126.net/o3BtModPfRAq0Ughv7Khjg==/109951172370674253.jpg?param=100y100',
        price: 30,
        customPriceConfig: null,
        coverUrl:
          'http://p2.music.126.net/AnoqT8oUKhwmjEFevfDg==/10995116785478361.jpg',
        pubTime: 1666059600490,
        productId: 0,
        saleNum: 0,
        topFans: null,
        albumType: 0,
        area: 7,
        artistType: 0,
        status: 0
      },
      {
        newAlbum: true,
        id: 153209488,
        name: 'I love',
        artistName: '(G)I-DLE',
        picUrl:
          'http://p2.music.126.net/r1AKMenByofI7Qqj3E5EqQ==/109951172091080013.jpg?param=100y100',
        price: 18,
        customPriceConfig: null,
        coverUrl:
          'http://p2.music.126.net/RAF9ImT625KGEbLY4mQ==/10995116797995976.jpg',
        pubTime: 1665997200765,
        productId: 0,
        saleNum: 0,
        topFans: null,
        albumType: 0,
        area: 16,
        artistType: 0,
        status: 0
      },
      {
        newAlbum: true,
        id: 153778856,
        name: 'すずめの戸締まり',
        artistName: 'RADWIMPS/陣内一真',
        picUrl:
          'http://p2.music.126.net/ZLunCTp4RRnu7N8lGVw4Fw==/109951172372358346.jpg?param=100y100',
        price: 30,
        customPriceConfig: null,
        coverUrl:
          'http://p2.music.126.net/D1SFObeLsaW_KMojcJZquw==/10995116799320860.jpg',
        pubTime: 1666868400771,
        productId: 0,
        saleNum: 0,
        topFans: null,
        albumType: 0,
        area: 8,
        artistType: 0,
        status: 0
      },
      {
        newAlbum: true,
        id: 153847407,
        name: '5522',
        artistName: '安溥 anpu',
        picUrl:
          'http://p2.music.126.net/Sp4-nb2K1u6R-GCDnqrXyw==/109951172440327463.jpg?param=100y100',
        price: 30,
        customPriceConfig: null,
        coverUrl:
          'http://p2.music.126.net/FATAg3PF9fO5DuWjTtHUxw==/10995116796156160.jpg',
        pubTime: 1666868400728,
        productId: 0,
        saleNum: 0,
        topFans: null,
        albumType: 0,
        area: 7,
        artistType: 0,
        status: 0
      },
      {
        newAlbum: true,
        id: 186225520,
        name: '减韵文音·胡笳十八拍',
        artistName: '朝简/史弘弘/窦唯',
        picUrl:
          'http://p2.music.126.net/o3BtModPfRAq0Ughv7Khjg==/109951172370674253.jpg?param=100y100',
        price: 30,
        customPriceConfig: null,
        coverUrl:
          'http://p2.music.126.net/AnoqT8oUKhwmjEFevfDg==/10995116785478361.jpg',
        pubTime: 1666059600490,
        productId: 0,
        saleNum: 0,
        topFans: null,
        albumType: 0,
        area: 7,
        artistType: 0,
        status: 0
      },
      {
        newAlbum: true,
        id: 151909488,
        name: 'I love',
        artistName: '(G)I-DLE',
        picUrl:
          'http://p2.music.126.net/r1AKMenByofI7Qqj3E5EqQ==/109951172091080013.jpg?param=100y100',
        price: 18,
        customPriceConfig: null,
        coverUrl:
          'http://p2.music.126.net/RAF9ImT625KGEbLY4mQ==/10995116797995976.jpg',
        pubTime: 1665997200765,
        productId: 0,
        saleNum: 0,
        topFans: null,
        albumType: 0,
        area: 16,
        artistType: 0,
        status: 0
      },
      {
        newAlbum: true,
        id: 153538832,
        name: 'すずめの戸締まり',
        artistName: 'RADWIMPS/陣内一真',
        picUrl:
          'http://p2.music.126.net/ZLunCTp4RRnu7N8lGVw4Fw==/109951172372358346.jpg?param=100y100',
        price: 30,
        customPriceConfig: null,
        coverUrl:
          'http://p2.music.126.net/D1SFObeLsaW_KMojcJZquw==/10995116799320860.jpg',
        pubTime: 1666868400771,
        productId: 0,
        saleNum: 0,
        topFans: null,
        albumType: 0,
        area: 8,
        artistType: 0,
        status: 0
      },
      {
        newAlbum: true,
        id: 153223497,
        name: '5522',
        artistName: '安溥 anpu',
        picUrl:
          'http://p2.music.126.net/Sp4-nb2K1u6R-GCDnqrXyw==/109951172440327463.jpg?param=100y100',
        price: 30,
        customPriceConfig: null,
        coverUrl:
          'http://p2.music.126.net/FATAg3PF9fO5DuWjTtHUxw==/10995116796156160.jpg',
        pubTime: 1666868400728,
        productId: 0,
        saleNum: 0,
        topFans: null,
        albumType: 0,
        area: 7,
        artistType: 0,
        status: 0
      },
      {
        newAlbum: true,
        id: 118625520,
        name: '减韵文音·胡笳十八拍',
        artistName: '朝简/史弘弘/窦唯',
        picUrl:
          'http://p2.music.126.net/o3BtModPfRAq0Ughv7Khjg==/109951172370674253.jpg?param=100y100',
        price: 30,
        customPriceConfig: null,
        coverUrl:
          'http://p2.music.126.net/AnoqT8oUKhwmjEFevfDg==/10995116785478361.jpg',
        pubTime: 1666059600490,
        productId: 0,
        saleNum: 0,
        topFans: null,
        albumType: 0,
        area: 7,
        artistType: 0,
        status: 0
      },
      {
        newAlbum: true,
        id: 153285488,
        name: 'I love',
        artistName: '(G)I-DLE',
        picUrl:
          'http://p2.music.126.net/r1AKMenByofI7Qqj3E5EqQ==/109951172091080013.jpg?param=100y100',
        price: 18,
        customPriceConfig: null,
        coverUrl:
          'http://p2.music.126.net/RAF9ImT625KGEbLY4mQ==/10995116797995976.jpg',
        pubTime: 1665997200765,
        productId: 0,
        saleNum: 0,
        topFans: null,
        albumType: 0,
        area: 16,
        artistType: 0,
        status: 0
      }
    ]
  }
  response.send(result)
})

//排行榜
app.get('/playList/detail', (request, response) => {
  const { id } = request.query
  console.log('参数', id)
  const upRanking = {
    id: '0x4j358kj',
    type: '上升榜',
    name: '陈奕迅',
    coverImgUrl:
      'http://p4.music.126.net/rIi7Qzy2i2Y_1QD7cd0MYA==/109951170048506929.jpg',
    tracks: [
      {
        name: '冬蛾'
      },
      {
        name: '小问题'
      },
      {
        name: '分秒宇宙'
      },
      {
        name: '碎碎念'
      },
      {
        name: '落叶的回信'
      },
      {
        name: '小半'
      },
      {
        name: '如果呢'
      },
      {
        name: '泪桥'
      },
      {
        name: '唯一'
      },
      {
        name: '不知从何说起'
      },
      {
        name: '落叶的回信'
      },
      {
        name: '小半'
      }
    ]
  }
  const newRanking = {
    id: '0x8j35k8j',
    type: '新歌榜',
    name: '陈奕迅',
    coverImgUrl:
      'http://p3.music.126.net/5guhqPBTcIrrhLBotgaT6w==/109951170048511751.jpg',
    tracks: [
      {
        name: '碎碎念'
      },
      {
        name: '落叶的回信'
      },
      {
        name: '小半'
      },
      {
        name: '如果呢'
      },
      {
        name: '泪桥'
      },
      {
        name: '唯一'
      },
      {
        name: '不知从何说起'
      },
      {
        name: '冬蛾'
      },
      {
        name: '小问题'
      },
      {
        name: '分秒宇宙'
      },
      {
        name: '落叶的回信'
      },
      {
        name: '小半'
      }
    ]
  }
  const originRanking = {
    id: '0x68f35kj',
    type: '原创榜',
    name: '陈奕迅',
    coverImgUrl:
      'http://p3.music.126.net/BaP9nrocNTL3gGThysv4eQ==/109951170091896587.jpg',
    tracks: [
      {
        name: '公民身份圣诞快乐入户油腻腻日月明'
      },
      {
        name: '泪桥'
      },
      {
        name: '唯一'
      },
      {
        name: '不知从何说起'
      },
      {
        name: '冬蛾'
      },
      {
        name: '小问题'
      },
      {
        name: '分秒宇宙'
      },
      {
        name: '碎碎念'
      },
      {
        name: '落叶的回信'
      },
      {
        name: '小半'
      },
      {
        name: '落叶的回信'
      },
      {
        name: '小半'
      }
    ]
  }

  const result = {
    code: 200,
    message: 'success',
    data:
      Number(id) === 666666
        ? upRanking
        : Number(id) === 888888
          ? newRanking
          : originRanking
  }
  response.send(result)
})
app.listen(5000, () => {
  console.log('服务器1启动成功，请求地址：http://localhost:5000/images')
})
