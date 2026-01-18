import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getSongLyric } from '../services'
import { ILyric, parseLyric } from '@/utils/format'
import type { RootState } from '@/store'
interface IThunkState {
  state: RootState
}
export const changeMusicAction = createAsyncThunk<void, boolean, IThunkState>(
  'music',
  (isNext, { dispatch, getState }) => {
    const player = getState().player
    // 1.获取新歌曲的索引
    const palyMode = player.playMode
    const songIndex = player.playSongIndex
    const songList = player.playSongList

    // 2.根据不同的模式计算不同的下一个索引
    let newIndex = songIndex
    if (palyMode === 1) {
      newIndex = Math.floor(Math.random() * songList.length)
    } else {
      // 单曲循环、顺序播放
      newIndex = isNext ? songIndex + 1 : songIndex - 1
      if (newIndex >= songList.length - 1) {
        newIndex = 0
      }
      if (newIndex < 0) {
        newIndex = songList.length - 1
      }
    }
    // 3.获取当前歌曲
    const currentSong = songList[newIndex]
    dispatch(changeCurrentSongAction(currentSong))
    dispatch(changePlayIndexAction(newIndex))

    // 4.获取歌词
    // 2.获取歌曲的歌词
    getSongLyric(currentSong.id).then((res) => {
      const lyric = res.lrc.lyric

      // 2.解析为对象
      // dispatch(changeCurrentLyricAction(lyric))
      const lyrics = parseLyric(lyric)

      dispatch(changeCurrentLyricAction(lyrics))
    })
  }
)

// 0-单曲播放 1-随机播放 2-顺序播放
export type IPlayMode = 0 | 1 | 2

interface IPlayerState {
  currentSong: any
  currentLyric: ILyric[]
  lyricIndex: number
  playSongList: any[]
  playSongIndex: number
  playMode: IPlayMode
}

const initialState: IPlayerState = {
  currentSong: {
    name: '外婆桥',
    id: 1393659632,
    pst: 0,
    t: 0,
    ar: [
      {
        id: 9255,
        name: '任然',
        tns: [],
        alias: []
      }
    ],
    alia: [],
    pop: 100,
    st: 0,
    rt: '',
    fee: 8,
    v: 11,
    crbt: null,
    cf: '',
    al: {
      id: 81984960,
      name: '外婆桥',
      picUrl:
        'https://p2.music.126.net/Ep-CjAsRL5yvZkDreiWsMQ==/109951164390004861.jpg',
      tns: [],
      pic_str: '109951164390004861',
      pic: 109951164390004860
    },
    dt: 261538,
    h: {
      br: 320000,
      fid: 0,
      size: 10464697,
      vd: -40712,
      sr: 44100
    },
    m: {
      br: 192000,
      fid: 0,
      size: 6278835,
      vd: -38096,
      sr: 44100
    },
    l: {
      br: 128000,
      fid: 0,
      size: 4185905,
      vd: -36381,
      sr: 44100
    },
    sq: {
      br: 1411000,
      fid: 0,
      size: 28588499,
      vd: -40709,
      sr: 44100
    },
    hr: null,
    a: null,
    cd: '01',
    no: 0,
    rtUrl: null,
    ftype: 0,
    rtUrls: [],
    djId: 0,
    copyright: 0,
    s_id: 0,
    mark: 17179877376,
    originCoverType: 1,
    originSongSimpleData: null,
    tagPicList: null,
    resourceState: true,
    version: 11,
    songJumpInfo: null,
    entertainmentTags: null,
    awardTags: null,
    displayTags: null,
    single: 0,
    noCopyrightRcmd: null,
    mv: 0,
    rtype: 0,
    rurl: null,
    mst: 9,
    cp: 0,
    publishTime: 1569600000000
  },
  currentLyric: [],
  lyricIndex: -1,
  playSongList: [
    {
      name: '外婆桥',
      id: 1393659632,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 9255,
          name: '任然',
          tns: [],
          alias: []
        }
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: '',
      fee: 8,
      v: 11,
      crbt: null,
      cf: '',
      al: {
        id: 81984960,
        name: '外婆桥',
        picUrl:
          'https://p2.music.126.net/Ep-CjAsRL5yvZkDreiWsMQ==/109951164390004861.jpg',
        tns: [],
        pic_str: '109951164390004861',
        pic: 109951164390004860
      },
      dt: 261538,
      h: {
        br: 320000,
        fid: 0,
        size: 10464697,
        vd: -40712,
        sr: 44100
      },
      m: {
        br: 192000,
        fid: 0,
        size: 6278835,
        vd: -38096,
        sr: 44100
      },
      l: {
        br: 128000,
        fid: 0,
        size: 4185905,
        vd: -36381,
        sr: 44100
      },
      sq: {
        br: 1411000,
        fid: 0,
        size: 28588499,
        vd: -40709,
        sr: 44100
      },
      hr: null,
      a: null,
      cd: '01',
      no: 0,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 17179877376,
      originCoverType: 1,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 11,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      displayTags: null,
      single: 0,
      noCopyrightRcmd: null,
      mv: 0,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 0,
      publishTime: 1569600000000
    },
    {
      name: '风中奇缘',
      id: 286071,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 29897393,
          name: '西单女孩',
          tns: [],
          alias: []
        }
      ],
      alia: [],
      pop: 95,
      st: 0,
      rt: '',
      fee: 8,
      v: 264,
      crbt: null,
      cf: '',
      al: {
        id: 28415,
        name: '西单女孩',
        picUrl:
          'https://p1.music.126.net/u7h65uWlDWBiOM3AzHgQ6w==/109951165122493236.jpg',
        tns: [],
        pic_str: '109951165122493236',
        pic: 109951165122493230
      },
      dt: 282627,
      h: {
        br: 320000,
        fid: 0,
        size: 11307929,
        vd: -37823,
        sr: 44100
      },
      m: {
        br: 192000,
        fid: 0,
        size: 6784775,
        vd: -35275,
        sr: 44100
      },
      l: {
        br: 128000,
        fid: 0,
        size: 4523198,
        vd: -33762,
        sr: 44100
      },
      sq: {
        br: 1671924,
        fid: 0,
        size: 59066540,
        vd: -37805,
        sr: 44100
      },
      hr: null,
      a: null,
      cd: '1',
      no: 5,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 2,
      s_id: 0,
      mark: 17179877376,
      originCoverType: 1,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 264,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      displayTags: null,
      single: 0,
      noCopyrightRcmd: null,
      mv: 0,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 1416710,
      publishTime: 1328889600000
    }
  ],
  playSongIndex: -1,
  playMode: 0
}
const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    changeCurrentSongAction(state, { payload }) {
      state.currentSong = payload
    },
    changePlayIndexAction(state, { payload }) {
      state.playSongIndex = payload
    },
    changeCurrentLyricAction(state, { payload }) {
      state.currentLyric = payload
    },
    changeCurrentLyricIndexAction(state, { payload }) {
      state.lyricIndex = payload
    }
  }
})
export const {
  changeCurrentSongAction,
  changePlayIndexAction,
  changeCurrentLyricAction,
  changeCurrentLyricIndexAction
} = playerSlice.actions

export default playerSlice.reducer
