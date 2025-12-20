import { useAppSelector } from '@/hooks'
import { memo, useRef, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { Carousel } from 'antd'
import classNames from 'classnames'
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

  const [currentIndex, setCurrentIndex] = useState(0)
  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners
    }),
    shallowEqual
  )

  function beforeChange(from: number, to: number) {
    // setCurrentIndex(-1)
  }

  function afterChange(current: number) {
    setCurrentIndex(current)
  }

  //获取背景图片，右值时再获取，无值时不要获取
  let bgImageUrl
  if (currentIndex >= 0 && banners.length > 0) {
    bgImageUrl = banners[currentIndex]?.imageUrl
  }
  // if (bgImageUrl) {
  //   bgImageUrl = bgImageUrl + '?imageView&blur=40x20'
  // }

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
    <TopBannerWrapper
      style={{ background: `url('${bgImageUrl}') center center / 6000px` }}
    >
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel
            ref={carouselRef}
            autoplay
            dots={false}
            autoplaySpeed={3000}
            effect="fade"
            beforeChange={beforeChange}
            afterChange={afterChange}
          >
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
          <ul className="dots">
            {banners.map((item, index) => {
              return (
                <li key={index}>
                  <span
                    className={classNames('item', {
                      active: index === currentIndex
                    })}
                  ></span>
                </li>
              )
            })}
          </ul>
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
