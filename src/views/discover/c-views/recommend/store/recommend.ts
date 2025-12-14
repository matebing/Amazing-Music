import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getBanners, getHotRecommend } from '../service/recommend'
import { Banner, HotRecommend } from './type'

export const fetchBannerDataAction = createAsyncThunk(
  'banners',
  async (arg, { dispatch, getState }) => {
    const res = await getBanners()
    dispatch(changeBannerAction(res.data))
    console.log('banners', res)
    // return res.data
  }
)
export const fetchHotRecommendAction = createAsyncThunk(
  'hotRecommend',
  async (args, { dispatch }) => {
    const res = await getHotRecommend(8)
    dispatch(changeHotRecommendAction(res.data))
    console.log('hotRecommend', res)
  }
)

interface RecommendState {
  banners: Banner[]
  hotRecommends: HotRecommend[]
}
const initialState: RecommendState = {
  banners: [],
  hotRecommends: []
}
const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannerAction(state, { payload }) {
      state.banners = payload
    },
    changeHotRecommendAction(state, { payload }) {
      state.hotRecommends = payload
    }
  }
  //   extraReducers: (builder) => {
  //     builder
  //       .addCase(fetchBannerDataAction.pending, (state, action) => {
  //         console.log('pending')
  //       })
  //       .addCase(fetchBannerDataAction.fulfilled, (state, { payload }) => {
  //         state.banners = payload
  //       })
  //       .addCase(fetchBannerDataAction.rejected, (state, action) => {
  //         console.log('rejected')
  //       })
  //   }
})
export const { changeBannerAction, changeHotRecommendAction } =
  recommendSlice.actions
export default recommendSlice.reducer
