import appRequest from '@/service'
import { AxiosHeaders } from 'axios'

const headers = new AxiosHeaders()
headers.set('Content-Type', 'application/json')

export const getSongDetail = (id: number) => {
  return appRequest.get({
    url: '/song/detail',
    params: {
      ids: id
    },
    headers
  })
}

export const getSongLyric = (id: number) => {
  return appRequest.get({
    url: '/lyric',
    params: {
      id
    },
    headers
  })
}
