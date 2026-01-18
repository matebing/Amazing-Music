import { memo, useRef } from 'react'
import type { FC, ReactNode } from 'react'
import { Carousel } from 'antd'
import { SliderBannerWrapper } from './style'
import AlbumItem from '@/components/album-item'

interface IProps {
  children?: ReactNode
  autoPlay?: boolean
  dots?: boolean
  speed?: number
  data: any[]
}

const SliderBanner: FC<IProps> = (props) => {
  const carouselRef = useRef(null)
  const { autoPlay = false, dots = false, speed = 500, data = [] } = props
  function handleClick(direction: string) {
    return () => {
      if (carouselRef.current && direction === 'left') {
        ;(carouselRef.current as any).prev()
      } else if (carouselRef.current && direction === 'right') {
        ;(carouselRef.current as any).next()
      }
    }
  }
  return (
    <SliderBannerWrapper>
      <div className="content">
        <button
          className="sprite_02 arrow arrow_left"
          onClick={handleClick('left')}
        ></button>
        <div className="banner">
          <Carousel
            ref={carouselRef}
            autoplay={autoPlay}
            dots={dots}
            speed={speed}
          >
            {[0, 1].map((item, index) => {
              return (
                <div key={index}>
                  <div key={index} className="album-list">
                    {data.slice(item * 5, (item + 1) * 5).map((album) => {
                      return (
                        <AlbumItem key={album.id} data={album}>
                          {album.name}
                        </AlbumItem>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </Carousel>
        </div>
        <button
          className="sprite_02 arrow arrow_right"
          onClick={handleClick('right')}
        ></button>
      </div>
    </SliderBannerWrapper>
  )
}

//直接导出性能不高，即便props没有改变，组件也会重新渲染，使用memo可避免此问题
export default memo(SliderBanner)
