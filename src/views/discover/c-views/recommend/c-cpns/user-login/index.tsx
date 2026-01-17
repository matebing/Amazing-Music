import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { UserLoginWrapp } from './style'

interface IProps {
  children?: ReactNode
}

const UserLogin: FC<IProps> = (props) => {
  return (
    <UserLoginWrapp className="sprite_02">
      <p className="desc">
        登录网易云音乐，可以享受无限收藏的录取，并且无限同步到手机
      </p>
      <span className="btn sprite_02">用户登录</span>
    </UserLoginWrapp>
  )
}

//直接导出性能不高，即便props没有改变，组件也会重新渲染，使用memo可避免此问题
export default memo(UserLogin)
