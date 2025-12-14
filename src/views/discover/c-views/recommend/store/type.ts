export interface Banner {
  imageUrl: string
  targetId: number
  adId: string
  targetType: number
  titleColor: string
  typeTitle: string
  url: string
  exclusive: boolean
  monitorImpress: string
  monitorClick: string
  monitorType: string
  monitorImpressList: string
  monitorClickList: string
  monitorBlackList: string
  extMonitor: string
  extMonitorInfo: string
  adSource: string
  adLocation: string
  adDispatchJson: string
  encodeId: string
  program: string
  event: string
  video: string
  song: string
  scm: string
  bannerBizType: string
}

export interface HotRecommend {
  id: number
  type: number
  name: string
  copywriter: string
  picUrl: string
  canDislike: boolean
  trackNumberUpdateTime: number
  playCount: number
  trackCount: number
  highQuality: boolean
  alg: string
}
