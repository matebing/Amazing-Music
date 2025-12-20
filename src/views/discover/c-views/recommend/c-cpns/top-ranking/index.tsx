import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { TopRankingWrapp } from './style'
import AreaHeader from '@/components/area-header'
import { useAppSelector } from '@/store'
import TopRankingItem from '@/components/top-ranking-item'

interface IProps {
  children?: ReactNode
}

const TopRanking: FC<IProps> = (props) => {
  const { rankingData } = useAppSelector((state) => ({
    rankingData: state.recommend.rankingData
  }))
  console.log('测试', rankingData)
  return (
    <TopRankingWrapp>
      <AreaHeader title="榜单" moreLink="/discover/ranking" />
      <div className="content">
        {rankingData.map((item) => {
          return <TopRankingItem key={item.id} data={item} />
        })}
      </div>
    </TopRankingWrapp>
  )
}

//直接导出性能不高，即便props没有改变，组件也会重新渲染，使用memo可避免此问题
export default memo(TopRanking)
