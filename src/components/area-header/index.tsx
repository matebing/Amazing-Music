import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { AreaHeaderWrapper } from './style'

interface IProps {
  children?: ReactNode
  title?: string
  keyWords?: string[]
  moreText?: string
  moreLink?: string
}

const AreaHeader: FC<IProps> = (props) => {
  const {
    title = '默认',
    keyWords = [],
    moreText = '更多',
    moreLink = '/'
  } = props

  return (
    <AreaHeaderWrapper>
      <div className="left sprite_02">
        <h3 className="title">{title}</h3>
        <div className="keywords">
          {keyWords.map((item, index) => {
            return (
              <div className="item" key={index}>
                <span className="text">{item}</span>
                <span className="divider">|</span>
              </div>
            )
          })}
        </div>
      </div>
      <div className="right">
        <Link className="more" to={moreLink}>
          {moreText}
        </Link>
        <i className="icon sprite_02"></i>
      </div>
    </AreaHeaderWrapper>
  )
}

//直接导出性能不高，即便props没有改变，组件也会重新渲染，使用memo可避免此问题
export default memo(AreaHeader)
