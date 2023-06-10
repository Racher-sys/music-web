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
    return `https://music.163.com/song/media/outer/url?id=${id}.mp3`
    // return "https://m10.music.126.net/20230606224013/0e001473d327087bad892cacdc68912f/yyaac/0553/015e/535f/29c7a9025d64209c7175d5afaa1bbca4.m4a"

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