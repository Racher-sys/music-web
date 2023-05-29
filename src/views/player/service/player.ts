// 封装url
import hyRequest from "@/service";

export function getSongDetail(ids: number){
    return hyRequest.get({
        url: '/song/detail',
        params: {ids}
    })
}