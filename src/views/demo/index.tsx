import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { shallowEqual } from 'react-redux'
import {} from 'react-redux'
import { useAppSelector } from '@/hooks/hook'
// import type { RootState } from './store'

interface IProps {
  children?: ReactNode
}

const Template: FC<IProps> = (props) => {
  // const { count, message } = useSelector(
  //   (state: RootState) => ({
  //     count: state.counter.count,
  //     message: state.counter.message
  //   }),
  //   shallowEqual
  // )
  const { count, message } = useAppSelector(
    (state) => ({
      count: state.counter.count,
      message: state.counter.message
    }),
    shallowEqual
  )
  return (
    <div>
      Template
      <h2>
        当前计数：{count} 当前message：{message}
      </h2>
    </div>
  )
}

//直接导出性能不高，即便props没有改变，组件也会重新渲染，使用memo可避免此问题
export default memo(Template)
