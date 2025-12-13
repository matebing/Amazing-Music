import styled from 'styled-components'
export const HeaderWrapper = styled.div`
  .content {
    height: 100px;
    ${(props) => (props.theme as any).mixin.wrapv1}
  }
`
//刚安装的三方依赖，因为没有声明过styled-components模块，会报错，ts找不到该模块
//需要对当前模块进行类型声明
/**
 * 三种类型声明
 *  > TypeScript内置
 *  > 第三方类型声明
 *    > 库内部已经有类型声明，如axios，axios.d.ts
 *    > 库内部没有类型声明，但是有专门的类型声明库，如react/react-dom @types/react，ts类型校验时，会自动加载这些类型声明文件
 *  > 自己写类型声明文件
 */
