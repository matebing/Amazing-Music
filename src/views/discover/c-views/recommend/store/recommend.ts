import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  getBanners,
  getHotRecommend,
  getNewestAlbums,
  getPlayListDetail,
  getSettleSingers
} from '../service/recommend'
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
export const fetchNewestAlbumsAction = createAsyncThunk(
  'newestAlbums',
  async (args, { dispatch }) => {
    const res = await getNewestAlbums()
    dispatch(changeNewestAlbumsAction(res.data))
    console.log('newestAlbums', res)
  }
)
const rankingIds: Array<number> = [666666, 888888, 686868]
export const fetchRankingDataAction = createAsyncThunk(
  'rankingData',
  async (_, { dispatch }) => {
    //1、每个请求单独处理
    // for (const id of rankingIds) {
    //   getPlayListDetail(id).then((res) => {
    //     switch (id) {
    //       case 666666:
    //         console.log('飙射榜', res)
    //         break
    //       case 888888:
    //         console.log('新歌榜', res)
    //         break
    //       case 686868:
    //         console.log('原创榜', res)
    //     }
    //   })
    // }
    //2、将三个数组都拿到，放到数组中统一处理
    //获取到所有结果后，进行dispatch
    //获取到的结果需要有顺序
    const promises: Promise<any>[] = []
    for (const id of rankingIds) {
      promises.push(getPlayListDetail(id))
    }
    Promise.all(promises).then((res) => {
      const rankingData = res.map((item) => {
        return item.data
      })
      dispatch(changeRankingDataAction(rankingData))
      console.log('rankingData', rankingData, res)
    })
  }
)
export const fetchSettleSingersAction = createAsyncThunk(
  'artistList',
  async (args, { dispatch }) => {
    const res = await getSettleSingers()
    dispatch(changeSettleSingersAction(res.data))
    console.log('artistList', res)
  }
)

//合并
export const fetchRecommendDataAction = createAsyncThunk(
  'recommendData',
  (_, { dispatch }) => {
    //1、轮播图
    getBanners().then((res) => {
      dispatch(changeBannerAction(res.data))
    })
    getHotRecommend().then((res) => {
      dispatch(changeHotRecommendAction(res.data))
    })
    getNewestAlbums().then((res) => {
      dispatch(changeNewestAlbumsAction(res.data))
    })
    getSettleSingers().then((res) => {
      dispatch(changeSettleSingersAction(res.data))
    })
  }
)
export interface RecommendState {
  banners: Banner[]
  hotRecommends: HotRecommend[]
  newestAlbums: Array<any>
  rankingData: Array<any>
  settleSingers: Array<any>
}
const initialState: RecommendState = {
  banners: [],
  hotRecommends: [],
  newestAlbums: [],
  rankingData: [],
  settleSingers: []
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
    },
    changeNewestAlbumsAction(state, { payload }) {
      state.newestAlbums = payload
    },
    changeRankingDataAction(state, { payload }) {
      state.rankingData = payload
    },
    changeSettleSingersAction(state, { payload }) {
      state.settleSingers = payload
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
export const {
  changeBannerAction,
  changeHotRecommendAction,
  changeNewestAlbumsAction,
  changeRankingDataAction,
  changeSettleSingersAction
} = recommendSlice.actions
export default recommendSlice.reducer
