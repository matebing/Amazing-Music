import React, { PureComponent } from 'react'
interface IProps {
  name: string
  age?: number
}
interface IState {
  message: string
  counter: number
}
interface ISnapshot {
  address: string
}
class ClassComponent extends PureComponent<IProps, IState, ISnapshot> {
  state = {
    message: 'hello world',
    counter: 18
  }

  //函数返回的类型必须是ISnapshot类型
  getSnapshotBeforeUpdate(
    prevProps: Readonly<IProps>,
    prevState: Readonly<IState>
  ) {
    return {
      address: '0xkjwj4kj2'
    }
  }

  componentDidUpdate(
    prevProps: Readonly<IProps>,
    prevState: Readonly<IState>,
    snapshot?: ISnapshot | undefined
  ): void {}

  render(): React.ReactNode {
    return (
      <div>
        ClassComponent
        <h1>{this.state.message}</h1>
      </div>
    )
  }
}

export default ClassComponent
