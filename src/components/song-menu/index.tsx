import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { SongMenuWrapper } from './style'
import { formatCount, formatImage } from '@/utils/format'

interface IProps {
  children?: ReactNode
  songData: any
}

const SongMenu: FC<IProps> = (props) => {
  const { songData = {} } = props
  return (
    <SongMenuWrapper>
      <div className="top">
        <img src={formatImage(songData.picUrl, 70)} alt="" />
        <div className="cover sprite_cover">
          <div className="info sprite_cover">
            <span className="count">
              <i className="headset sprite_icon"></i>
              {formatCount(songData.playCount)}
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="bottom">{songData.name}</div>
    </SongMenuWrapper>
  )
}

//直接导出性能不高，即便props没有改变，组件也会重新渲染，使用memo可避免此问题
export default memo(SongMenu)
