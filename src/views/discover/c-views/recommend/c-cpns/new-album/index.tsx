import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { NewAlbumWrapper } from './style'
import AreaHeader from '@/components/area-header'
import SliderBanner from '@/components/slider-banner'

interface IProps {
  children?: ReactNode
}

const NewAlbum: FC<IProps> = (props) => {
  return (
    <NewAlbumWrapper>
      <AreaHeader title="新碟上架" moreLink="/discover/album" />
      <SliderBanner autoPlay={false} speed={1500} />
    </NewAlbumWrapper>
  )
}

//直接导出性能不高，即便props没有改变，组件也会重新渲染，使用memo可避免此问题
export default memo(NewAlbum)
