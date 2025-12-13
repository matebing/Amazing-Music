import { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { shallowEqual } from 'react-redux'
import { useAppSelector, useAppDispatch } from '@/hooks'
import { changeMessage } from '@/store/modules/counter'
import hyRequest from '@/service'
import { AxiosHeaders } from 'axios'
import ClassComponent from './ClassComponent'
// import type { RootState } from './store'

interface IProps {
  children?: ReactNode
}

export interface IBannerData {
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

const Template: FC<IProps> = (props) => {
  // const { count, message } = useSelector(
  //   (state: RootState) => ({
  //     count: state.counter.count,
  //     message: state.counter.message
  //   }),
  //   shallowEqual
  // )
  const { count, message, direction } = useAppSelector(
    (state) => ({
      count: state.counter.count,
      message: state.counter.message,
      direction: state.counter.direction
    }),
    shallowEqual
  )

  //获取dispatch函数
  const dispatch = useAppDispatch()

  //修改message
  function modifyMessage() {
    dispatch(changeMessage('你好，世界'))
  }

  //给useState中的数据定义类型，通过泛型决定函数调用后返回的数据的类型
  const [banners, setBanners] = useState<IBannerData[]>([])

  //测试网络请求
  useEffect(() => {
    const headers = new AxiosHeaders()
    headers.set('Content-Type', 'application/json')
    hyRequest
      .get({
        url: '/api/banner',
        headers: new AxiosHeaders()
      })
      .then((res: any) => {
        console.log(res)
        setBanners(res.data || [])
      })
  }, [])

  return (
    <div>
      Template
      <h2>
        当前计数：{count} 当前message：{message} 当前方向：{direction}
      </h2>
      <button onClick={modifyMessage}>修改message</button>
      {banners.map((item, index) => {
        return <div key={index}>{item.imageUrl}</div>
      })}
      <ClassComponent name="zhangsan" />
    </div>
  )
}

//直接导出性能不高，即便props没有改变，组件也会重新渲染，使用memo可避免此问题
export default memo(Template)
