import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { SettleSingerWrapp } from './style'
import { useAppSelector } from '@/store'
import { formatImage } from '@/utils/format'

interface IProps {
  children?: ReactNode
}

const SettleSinger: FC<IProps> = (props) => {
  const { settleSingers } = useAppSelector((state) => ({
    settleSingers: state.recommend.settleSingers || []
  }))
  return (
    <SettleSingerWrapp>
      <div className="settle-singer-herder">
        <h3 className="title">入驻歌手</h3>
        <a className="more" href="#/discover/artist">
          查看全部 &gt;
        </a>
      </div>
      <div className="artists">
        {settleSingers.map((item, index) => {
          return (
            <a className="item" href="#/discover/artist" key={index}>
              <img src={formatImage(item.picUrl, 62)} alt="" />
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="alies">{item.alias.join(' ')}</div>
              </div>
            </a>
          )
        })}
      </div>
      <div className="apply-for">
        <a href="#/">申请成为网易音乐人</a>
      </div>
    </SettleSingerWrapp>
  )
}

//直接导出性能不高，即便props没有改变，组件也会重新渲染，使用memo可避免此问题
export default memo(SettleSinger)
