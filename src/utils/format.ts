export function formatCount(count: number){
    if (count > 100000){
        return Math.floor(count / 10000) + "万"
    }else{
        return count
    }
}

export function formatImageUrl(imgUrl: string, width: number, height: number = width){
    return imgUrl + `?param=${width}x${height}`
}


export function getSongPlayUrl(id: number){
    // return `https://music.163.com/song/media/outer/url?id=${id}.mp3`
    return "https://m701.music.126.net/20230524100402/9311273b34d15e37d8b41cfc583fda3f/jdyyaac/5452/565a/0f0f/c80a80ffc1a03e6cead08ee227458d9d.m4a"

}


export function formatTime(time: number){
    // 1.转换成秒
    const timeSeconds = time / 1000
    // 2. 获取分钟和秒
    const minutes = Math.floor(timeSeconds / 60) 
    const seconds = Math.floor(timeSeconds) % 60

    // 3.对不足两位的时间加上0
    const formatMinute = String(minutes).padStart(2, '0')
    const formatSecond = String(seconds).padStart(2, '0')
    return `${formatMinute}:${formatSecond}`

}