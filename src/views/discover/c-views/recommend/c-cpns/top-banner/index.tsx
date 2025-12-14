import { useAppSelector } from '@/hooks'
import { memo, useRef } from 'react'
import type { FC, ReactNode } from 'react'
import { Carousel } from 'antd'
import {
  BannerButton,
  BannerLeft,
  BannerRight,
  TopBannerWrapper
} from './style'
import { shallowEqual } from 'react-redux'

interface IProps {
  children?: ReactNode
}

const TopBanner: FC<IProps> = (props) => {
  const carouselRef = useRef(null)
  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners
    }),
    shallowEqual
  )

  function buttonClick(direction: string) {
    return () => {
      if (carouselRef.current && direction === 'left') {
        ;(carouselRef.current as any).prev()
      } else if (carouselRef.current && direction === 'right') {
        ;(carouselRef.current as any).next()
      }
    }
  }

  return (
    <TopBannerWrapper>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel ref={carouselRef} autoplay autoplaySpeed={1000}>
            {banners.map((item) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img
                    className="image"
                    src={item.imageUrl}
                    alt={item.typeTitle}
                  ></img>
                </div>
              )
            })}
          </Carousel>
        </BannerLeft>
        <BannerRight>
          <div>PC 安卓 iPhone WP iPad Mac 六大客户端</div>
        </BannerRight>
        <BannerButton>
          <button className="btn left" onClick={buttonClick('left')}></button>
          <button className="btn right" onClick={buttonClick('right')}></button>
        </BannerButton>
      </div>
    </TopBannerWrapper>
  )
}

//直接导出性能不高，即便props没有改变，组件也会重新渲染，使用memo可避免此问题
export default memo(TopBanner)
