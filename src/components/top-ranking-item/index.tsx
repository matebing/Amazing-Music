import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { TopRankingItemWrapp } from './style'
import { formatImage } from '@/utils/format'

interface IProps {
  children?: ReactNode
  data: any
}

const TopRankingItem: FC<IProps> = (props) => {
  const { data } = props
  // const dispatch = useAppDispatch()
  const handlePlayMusic = (id: number) => {
    // dispatch(fetchCurrentSongAction(id))
  }
  return (
    <TopRankingItemWrapp>
      <div className="header">
        <div className="image">
          <img src={formatImage(data.coverImgUrl, 80)} alt=""></img>
          <i className="sprite_cover cover"></i>
        </div>
        <div className="info">
          <div className="name">{data.name}</div>
          <div className="btns">
            <i className="sprite_02 icon play"></i>
            <i className="sprite_02 icon favor"></i>
          </div>
        </div>
      </div>
      <div className="list">
        {(data.tracks || []).slice(0, 10).map((item: any, index: number) => {
          return (
            <div className="item" key={index}>
              <div className="index">{index + 1}</div>
              <div className="name">{item.name}</div>
              <div className="operate">
                <i
                  className="sprite_02 icon play"
                  onClick={() => handlePlayMusic(item.id)}
                ></i>
                <i className="sprite_icon2 icon add"></i>
                <i className="sprite_02 icon favor"></i>
              </div>
            </div>
          )
        })}
      </div>
      <div className="footer">查看全部 &gt;</div>
    </TopRankingItemWrapp>
  )
}

//直接导出性能不高，即便props没有改变，组件也会重新渲染，使用memo可避免此问题
export default memo(TopRankingItem)
