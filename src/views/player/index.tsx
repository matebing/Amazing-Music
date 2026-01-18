import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { PlayerWrapp } from './style'

interface IProps {
  children?: ReactNode
}

const Player: FC<IProps> = (props) => {
  return <PlayerWrapp>Player</PlayerWrapp>
}

//直接导出性能不高，即便props没有改变，组件也会重新渲染，使用memo可避免此问题
export default memo(Player)
