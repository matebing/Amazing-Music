import { configureStore } from '@reduxjs/toolkit'
import { useSelector, TypedUseSelectorHook } from 'react-redux'

import counterReducer from './modules/counter'

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})

//需要获取函数的返回值的类型
//函数有它自己的类型，获取到函数的类型后可以通过ReturnType<函数类型>的方式拿到函数的返回值类型
//先通过typeof获取getState函数的类型
type GetStateFnType = typeof store.getState
//再通过ReturnType<函数类型>的方式获取函数的返回值类型
export type RootState = ReturnType<GetStateFnType>
export type AppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store
