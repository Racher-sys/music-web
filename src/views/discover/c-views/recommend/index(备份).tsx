import hyRequest from "@/service";
import React, {memo, useState, useEffect} from "react";
import type { FC, ReactNode } from "react";

interface IProps{
    children?: ReactNode,
}

export interface IBannerData {
    imageUrl:           string;
    targetId:           number;
    adid:               null;
    targetType:         number;
    titleColor:         string;
    typeTitle:          string;
    url:                null;
    exclusive:          boolean;
    monitorImpress:     null;
    monitorClick:       null;
    monitorType:        null;
    monitorImpressList: null;
    monitorClickList:   null;
    monitorBlackList:   null;
    extMonitor:         null;
    extMonitorInfo:     null;
    adSource:           null;
    adLocation:         null;
    adDispatchJson:     null;
    encodeId:           string;
    program:            null;
    event:              null;
    video:              null;
    song:               null;
    scm:                string;
    bannerBizType:      string;
}

const Recommend: FC<IProps> = () =>{
    const [banners, setBanners] = useState<IBannerData[]>([])

    // 服务器返回数据的时候通过setbanner把数据放入banners,然后进行

    // 测试网络搜索
    useEffect(() => {
        hyRequest.get({
            url: '/banner'
        })
        .then((res) => {
            setBanners(res.banners)
        })
    },[])
    return (<div>
        {banners.map((item, index) => {
            return <div key={index}> {item.imageUrl} </div>
        })}
    </div>)
}

export default memo(Recommend);