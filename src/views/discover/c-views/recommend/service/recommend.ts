import appRequest from '@/service'
import { AxiosHeaders } from 'axios'

const headers = new AxiosHeaders()
headers.set('Content-Type', 'application/json')

export function getBanners() {
  return appRequest.get({
    url: '/api/banner',
    headers
  })
}

export function getHotRecommend(limit = 30) {
  return appRequest.get({
    url: '/api/hot/recommend',
    params: {
      limit
    },
    headers
  })
}
