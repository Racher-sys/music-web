import React, {memo} from "react";
import type { FC, ReactNode } from "react";
import { shallowEqual } from "react-redux";
import AreaHeaderV1 from "@/components/area-header-v1/index"
import { useAppSelector } from "@/store";
import SongMenuItem from "@/components/song-menu-item";
import { HotRecommendWarpper } from "./style";

interface IProps{
    children?: ReactNode,
}

const HotRecommend: FC<IProps> = () =>{
    /** 从store中获取数据 */
    const {hotRecommends} = useAppSelector((state) => ({
        hotRecommends: state.recommend.hotRecommend
    }),shallowEqual)
    return <div>
        <AreaHeaderV1 
        title="热门推荐" 
        keywords={["华语", "流行", "摇滚", "民谣", "电子"]}
        moreLink="/discover/songs"/>
        <HotRecommendWarpper>
        <div className="hotRecommend">
            {hotRecommends.map(item => {
                return (<SongMenuItem key={item.name} itemData={item}/>)
            })}
        </div>
        </HotRecommendWarpper>
    </div>
}

export default memo(HotRecommend);