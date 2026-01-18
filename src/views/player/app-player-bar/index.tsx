import { memo, useEffect, useRef, useState } from 'react'
import type { FC, ReactNode } from 'react'
import {
  AppPlayerBarWrapp,
  SongControl,
  SongOperator,
  SongPlayer
} from './style'
import { NavLink } from 'react-router-dom'
import { Slider, message } from 'antd'
import { useAppSelector } from '@/store'
import { formatImage, formatTime } from '@/utils/format'
import { shallowEqual } from 'react-redux'
import { getPlayUrl } from '@/utils/song-player'
import { useAppDispatch } from '@/hooks'
import {
  changeCurrentLyricIndexAction,
  changeMusicAction
} from '../store/player'

interface IProps {
  children?: ReactNode
}

const AppPlayerBar: FC<IProps> = (props) => {
  const audioRef = useRef(null)
  const dispatch = useAppDispatch()

  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [isSlidering, setIsSlidering] = useState(false)

  const { currentSong, lyrics, lyrciIndex, playMode } = useAppSelector(
    (state) => ({
      currentSong: state.player.currentSong,
      lyrics: state.player.currentLyric,
      lyrciIndex: state.player.lyricIndex,
      playMode: state.player.playMode
    }),
    shallowEqual
  )
  useEffect(() => {
    if (audioRef.current) {
      ;(audioRef.current as any).src = getPlayUrl(currentSong.songId)
      ;(audioRef.current as any)
        .play()
        .then(() => {
          setIsPlaying(true)
        })
        .catch(() => {
          setIsPlaying(false)
        })
    }
    setDuration(currentSong.dt)
  }, [currentSong])

  // 事件处理
  const handlerAudioPlay = () => {
    // 2.播放或者暂停
    if (isPlaying) {
      if (audioRef.current) {
        ;(audioRef.current as any).pause()
        setIsPlaying(true)
      }
    } else {
      if (audioRef.current) {
        ;(audioRef.current as any).play().catch(() => {
          setIsPlaying(false)
        })
      }
    }
    // 1.改变播放状态 setIsPlaying 为异步状态，在上方不一定能保证到最新的状态
    setIsPlaying(!isPlaying)
    console.log('isPlaying', isPlaying)
  }

  const handleChangeSong = (isNext: boolean = true) => {
    dispatch(changeMusicAction(isNext))
  }

  const handleSliderChange = (value: number) => {
    setIsSlidering(true)
    setProgress(value)

    //获取value的播放时间
    const currentTime = (value / 100) * duration
    setCurrentTime(currentTime)
  }

  const handleSliderChangeComplete = (value: number) => {
    if (audioRef.current) {
      const currentTime: any = (value / 100) * duration
      ;(audioRef.current as any).currentTime = currentTime / 1000
      setCurrentTime(currentTime)
      setProgress(value)
      if (isSlidering) {
        setIsSlidering(false)
      }
    }
  }

  /**
   * 音乐播放的进度处理
   */
  const handlerTimeUpdate = () => {
    if (audioRef.current) {
      // 1.获取当前的播放时间  秒
      const currentTime = (audioRef.current as any).currentTime
      // 2.设置进度条
      const progress = ((currentTime * 1000) / duration) * 100
      if (isSlidering) return
      setCurrentTime(currentTime)
      setProgress(progress)

      // 3.匹配歌词
      let index = lyrics.length - 1
      const currentIndex = lyrics.findIndex((item) => {
        return item.time > currentTime!
      })
      if (currentIndex !== -1) {
        index = currentIndex - 1
      }
      // 4.匹配上对应的索引
      if (lyrciIndex === index || index === -1) return
      dispatch(changeCurrentLyricIndexAction(index))

      message.open({
        content: lyrics[index].text,
        key: 'lyric',
        duration: 0
      })
    }
  }

  const handleTimeEnded = () => {
    if (playMode === 2 && audioRef.current) {
      ;(audioRef.current as any).currentTime = 0
      ;(audioRef.current as any).play()
    } else {
      handleChangeSong(true)
    }
  }

  return (
    <AppPlayerBarWrapp className="sprite_playbar">
      <div className="content wrap-v2">
        <SongControl $isPlaying={isPlaying}>
          <button
            className="btn sprite_playbar prev"
            onClick={() => handleChangeSong(false)}
          ></button>
          <button
            className="btn sprite_playbar play"
            onClick={handlerAudioPlay}
          ></button>
          <button
            className="btn sprite_playbar next"
            onClick={() => handleChangeSong(true)}
          ></button>
        </SongControl>
        <SongPlayer>
          <NavLink to="/player">
            <img
              className="image"
              src={formatImage(currentSong?.al?.picUrl, 32)}
              alt=""
            ></img>
          </NavLink>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong?.name}</span>
              <span className="singer-name">{currentSong?.ar?.[0]?.name}</span>
            </div>
            <div className="progress">
              <Slider
                value={progress}
                step={0.5}
                tooltip={{ formatter: null }}
                onChange={handleSliderChange}
                onChangeComplete={handleSliderChangeComplete}
              ></Slider>
              <div className="time">
                <span className="current">{formatTime(currentTime)}</span>
                <span className="divider">|</span>
                <span className="duration">{formatTime(duration)}</span>
              </div>
            </div>
          </div>
        </SongPlayer>
        <SongOperator>
          <div className="left">
            <button className="btn pip"></button>
            <button className="btn sprite_playbar favor"></button>
            <button className="btn sprite_playbar share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="btn sprite_playbar value"></button>
            <button className="btn sprite_playbar loop"></button>
            <button className="btn sprite_playbar playlist"></button>
          </div>
        </SongOperator>
      </div>
      <audio
        ref={audioRef}
        onTimeUpdate={handlerTimeUpdate}
        onEnded={handleTimeEnded}
      ></audio>
    </AppPlayerBarWrapp>
  )
}

//直接导出性能不高，即便props没有改变，组件也会重新渲染，使用memo可避免此问题
export default memo(AppPlayerBar)
