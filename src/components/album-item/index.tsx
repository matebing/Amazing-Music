import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { AlbumItemWrapp } from './style'
import { formatImage } from '@/utils/format'

interface IProps {
  children?: ReactNode
  data: any
}

const AlbumItem: FC<IProps> = (props) => {
  const { data } = props
  return (
    <AlbumItemWrapp>
      <div className="cover">
        <img src={formatImage(data.picUrl, 100)} alt="" />
        <i className="cover_bg sprite_cover"></i>
        <i className="bottom_bg sprite_02"></i>
      </div>
      <div className="info">
        <div className="name">{data.name}</div>
        <div className="artist">{data.artistName}</div>
      </div>
    </AlbumItemWrapp>
  )
}

//直接导出性能不高，即便props没有改变，组件也会重新渲染，使用memo可避免此问题
export default memo(AlbumItem)
