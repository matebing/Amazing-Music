import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getBanners } from '../service/recommend'
export const fetchBannerDataAction = createAsyncThunk(
  'banners',
  async (arg, { dispatch, getState }) => {
    const res = await getBanners()
    console.log(res)
    return res.data
  }
)
type Banner = {
  imageUrl: string
  targetId: number
  adId: string
  targetType: number
  titleColor: string
  typeTitle: string
  url: string
  exclusive: boolean
  monitorImpress: string
  monitorClick: string
  monitorType: string
  monitorImpressList: string
  monitorClickList: string
  monitorBlackList: string
  extMonitor: string
  extMonitorInfo: string
  adSource: string
  adLocation: string
  adDispatchJson: string
  encodeId: string
  program: string
  event: string
  video: string
  song: string
  scm: string
  bannerBizType: string
}
interface RecommendState {
  banners: Banner[]
}
const initialState: RecommendState = {
  banners: []
}
const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {}
})

export default recommendSlice.reducer
