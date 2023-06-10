export interface ILyric {
    time: number
    text: string
}

// [02:27.18]快要活不下去
const timeRegExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/
export function parseLyric(lyricString: string){
    const lyrics: ILyric[] = []

    // 1. 拿到一行行的数据
    const lines: string[] = lyricString.split("\n")

    // 2. 对每一句歌词进行解析成对应的对象
    for (const line of lines){
        const result = timeRegExp.exec(line)
        if (!result) continue

        // 获取每一组数据
        const time1 = Number(result[1]) * 60 * 1000
        const time2 = Number(result[2]) * 1000
        const time3 = result[3].length === 2 ? Number(result[3]) * 10 : Number(result[3])
        const time = time1 + time2 + time3

        // 获取每一组的文本
        const text = line.replace(timeRegExp, '')

        lyrics.push({time, text})
        // console.log(time1, time2, time3)
    }

    return lyrics
}