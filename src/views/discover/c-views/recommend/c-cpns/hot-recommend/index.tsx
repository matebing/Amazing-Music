import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { HotRecommendWrapper } from './style'
import AreaHeader from '@/components/area-header'
import { useAppSelector } from '@/hooks'
import { shallowEqual } from 'react-redux'
import SongMenu from '@/components/song-menu'

interface IProps {
  children?: ReactNode
}

const HotRecommend: FC<IProps> = (props) => {
  const { hotRecommends } = useAppSelector(
    (state) => ({
      hotRecommends: state.recommend.hotRecommends
    }),
    shallowEqual
  )
  return (
    <HotRecommendWrapper>
      <AreaHeader
        title="热门推荐"
        keyWords={['华语', '流行', '摇滚', '电子', '古风']}
        moreLink="/discover/songs"
      />
      <div className="hot-recommend-list">
        {hotRecommends.map((item, index) => {
          return <SongMenu key={index} songData={item} />
        })}
      </div>
    </HotRecommendWrapper>
  )
}

//直接导出性能不高，即便props没有改变，组件也会重新渲染，使用memo可避免此问题
export default memo(HotRecommend)
