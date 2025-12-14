import { AxiosHeaders } from 'axios'
import { BASE_URL, TIME_OUT } from './config'
import AppRequest from './request'

const headers = new AxiosHeaders()
headers.set('Content-Type', 'application/json')

const appRequest = new AppRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  headers,
  //   headers: {
  //     'Content-Type': 'application/json'
  //   } as AxiosRequestHeaders,
  interceptors: {
    requestSuccessFn: (config) => {
      return config
    }
  }
})

export default appRequest
