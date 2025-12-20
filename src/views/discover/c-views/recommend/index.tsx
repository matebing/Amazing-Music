import { useAppDispatch } from '@/hooks'
import { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import {
  fetchBannerDataAction,
  fetchHotRecommendAction,
  fetchNewestAlbumsAction,
  fetchRankingDataAction
} from './store/recommend'
import TopBanner from './c-cpns/top-banner'
import { RecommendWrapper } from './style'
import HotRecommend from './c-cpns/hot-recommend'
import NewAlbum from './c-cpns/new-album'
import TopRanking from './c-cpns/top-ranking'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = (props) => {
  //发起网络请求，action获取数据
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchBannerDataAction())
    dispatch(fetchHotRecommendAction())
    dispatch(fetchNewestAlbumsAction())
    dispatch(fetchRankingDataAction())
    // dispatch(fetchRecommendDataAction())
  }, [dispatch])
  return (
    <RecommendWrapper>
      <TopBanner></TopBanner>
      <div className="content wrap-v2">
        <div className="left">
          <HotRecommend />
          <NewAlbum />
          <TopRanking />
        </div>
        <div className="right">right</div>
      </div>
    </RecommendWrapper>
  )
}

//直接导出性能不高，即便props没有改变，组件也会重新渲染，使用memo可避免此问题
export default memo(Recommend)
