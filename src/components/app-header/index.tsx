import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const AppHeader: FC<IProps> = (props) => {
  return (
    <div className="nav">
      <Link to="/discover"> 发现音乐</Link>
      <Link to="/mine"> 我的音乐</Link>
      <Link to="/focus"> 关注</Link>
      <Link to="/download"> 下载客户端</Link>
      <Link to="/demo">示例</Link>
    </div>
  )
}

//直接导出性能不高，即便props没有改变，组件也会重新渲染，使用memo可避免此问题
export default memo(AppHeader)
