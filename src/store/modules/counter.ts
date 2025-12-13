import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface InitialState {
  count: number
  message: string
  direction: 'up' | 'down' | 'left' | 'right'
}
const initialState: InitialState = {
  count: 100,
  message: 'hello world',
  direction: 'left'
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    changeMessage: (state, { payload }: PayloadAction<string>) => {
      state.message = payload
    }
  }
})
export const { changeMessage } = counterSlice.actions
export default counterSlice.reducer
