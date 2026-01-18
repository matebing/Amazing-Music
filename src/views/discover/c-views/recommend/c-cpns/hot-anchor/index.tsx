import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { HotAnchorWrapp } from './style'
import { hotRadios } from '@/assets/data/local_data'

interface IProps {
  children?: ReactNode
}

const HotAnchor: FC<IProps> = (props) => {
  return (
    <HotAnchorWrapp>
      <div className="hot-anchor-herder">
        <h3 className="title">热门主播</h3>
      </div>
      <div className="anchors">
        {hotRadios.map((item, index) => {
          return (
            <div className="item" key={index}>
              <img className="image" src={item.picUrl} alt=""></img>
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="position">{item.position}</div>
              </div>
            </div>
          )
        })}
      </div>
    </HotAnchorWrapp>
  )
}

//直接导出性能不高，即便props没有改变，组件也会重新渲染，使用memo可避免此问题
export default memo(HotAnchor)
