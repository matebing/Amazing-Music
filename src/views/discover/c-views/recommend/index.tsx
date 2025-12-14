import { useAppDispatch } from '@/hooks'
import { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { fetchBannerDataAction } from './store/recommend'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = (props) => {
  //发起网络请求，action获取数据
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchBannerDataAction())
  }, [dispatch])
  return <div>Recommend</div>
}

//直接导出性能不高，即便props没有改变，组件也会重新渲染，使用memo可避免此问题
export default memo(Recommend)
