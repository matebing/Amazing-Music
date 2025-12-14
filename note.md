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

 
 recommend页面 -> slick存储recommend所有数据 -> recommend.ts封装url -> axios+ts/appRequest
 //按照功能划分文件夹
 在service中新建modules，modules存储recommend.ts封装的url，专门负责网络请求
 在store中新建modules，modules存储slice/recommend页面的数据，专门负责数据存储
 //按照业务划分文件夹
 将recommend.ts封装的rul和slice/页面数据和页面组件放在一起