export function formatCount(count: number) {
  if (count > 100000) {
    return Math.floor(count / 10000) + '万'
  } else {
    return count
  }
}

export function formatImage(
  imageUrl: string,
  width: number,
  height: number = width
) {
  return imageUrl + `?param=${width}y${height}`
}

/**
 * 格式化时间
 * @param time
 * @returns
 */
export const formatTime = (time: number) => {
  const date = new Date(time)

  const minute = date.getMinutes().toString().padStart(2, '0')
  const second = date.getSeconds().toString().padStart(2, '0')

  // const timeSecond = time / 1000

  // const minute = Math.floor(timeSecond / 60)
  //   .toString()
  //   .padStart(2, '0')

  // const second = (Math.floor(timeSecond) % 60).toString().padStart(2, '0')

  return `${minute}:${second}`
}

export interface ILyric {
  time: number
  text: string
}

/**
 * 箭头函数：函数签名在函数明后 parseLyric: (lyricStr: string) => ILyric[]
 * 普通函数：函数签名在函数前 function parseLyric(lyricStr: string): ILyric[]
 */

export const regex = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/
export const parseLyric: (lyricStr: string) => ILyric[] = (
  lyricStr: string
) => {
  const lyrics: ILyric[] = []

  // 1. 按行分割歌词
  const lyricLines = lyricStr.split('\n')

  // 2. 遍历每一行歌词
  for (const line of lyricLines) {
    // 3. 使用正则表达式匹配时间
    const timeMatch = line.match(regex)
    if (!timeMatch) continue

    const time1 = timeMatch[1]
    const time2 = timeMatch[2]
    const time3 =
      timeMatch[3].length === 2 ? Number(timeMatch[3]) * 10 : timeMatch[3]

    // 4. 将时间转换为毫秒
    const time =
      Number(time1) * 60 * 1000 + Number(time2) * 1000 + Number(time3)

    // 5. 获取歌词文本
    const text = line.replace(regex, '').trim()

    // 6. 将时间和文本添加到歌词数组中
    lyrics.push({ time, text })
  }

  return lyrics
}
