import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { SettleSingerWrapp } from './style'

interface IProps {
  children?: ReactNode
}

const SettleSinger: FC<IProps> = (props) => {
  return (
    <SettleSingerWrapp>
      <div className="settle-singer-herder">
        <h3 className="title">入驻歌手</h3>
        <a className="more" href="#/discover/artist">
          查看全部 &gt;
        </a>
      </div>
    </SettleSingerWrapp>
  )
}

//直接导出性能不高，即便props没有改变，组件也会重新渲染，使用memo可避免此问题
export default memo(SettleSinger)
