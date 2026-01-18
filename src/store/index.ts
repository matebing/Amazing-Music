import { configureStore } from '@reduxjs/toolkit'
import { useSelector, TypedUseSelectorHook } from 'react-redux'

import counterReducer from './modules/counter'
import recommendReducer from '@/views/discover/c-views/recommend/store/recommend'
import playerReducer from '@/views/player/store/player'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    recommend: recommendReducer,
    player: playerReducer
  }
})

//获取getState函数调用后的结果
const state = store.getState()
//获取state的类型
export type IState = typeof state

//需要获取函数的返回值的类型
//函数有它自己的类型，获取到函数的类型后可以通过ReturnType<函数类型>的方式拿到函数的返回值类型
//先通过typeof获取getState函数的类型
type GetStateFnType = typeof store.getState
//再通过ReturnType<函数类型>的方式获取函数的返回值类型
export type RootState = ReturnType<GetStateFnType>
export type AppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store
