import appRequest from '@/service'
import { AxiosHeaders } from 'axios'

const headers = new AxiosHeaders()
headers.set('Content-Type', 'application/json')

//获取轮播图
export function getBanners() {
  return appRequest.get({
    url: '/api/banner',
    headers
  })
}

//获取热门推荐
export function getHotRecommend(limit = 30) {
  return appRequest.get({
    url: '/api/hot/recommend',
    params: {
      limit
    },
    headers
  })
}

//获取新碟上架
export function getNewestAlbums(limit = 10) {
  return appRequest.get({
    url: '/api/newest/albums',
    params: {
      limit
    },
    headers
  })
}

//获取排行榜
export function getPlayListDetail(id: number) {
  return appRequest.get({
    url: '/api/playList/detail',
    params: {
      id
    },
    headers
  })
}
