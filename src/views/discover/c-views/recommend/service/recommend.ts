// 封装url

import hyRequest from "@/service";

export function getBanners(){
    return hyRequest.get({
        url: '/banner'
    })
}