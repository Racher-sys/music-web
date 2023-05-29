import React, {memo} from "react";
import type { FC, ReactNode } from "react";
import { SettleSingerWrapper } from "./style";
import AreaHeaderV2 from "@/components/area-header-v2";
import { useAppSelector } from "@/store";
import { shallowEqual } from "react-redux";
import { formatImageUrl } from "@/utils/format";

interface IProps{
    children?: ReactNode,
}

const SettleSinger: FC<IProps> = () =>{
    const {settleSingers} = useAppSelector((state) => ({
        settleSingers: state.recommend.settleSinger
    }), shallowEqual)
    return <SettleSingerWrapper>
        <AreaHeaderV2 title="入住歌手" more="查看更多 &gt;" moreLink="#/discover/artist"/>
        <div className="artists">
            {
                settleSingers.map(item => {
                    return (
                        <div className="item">
                            <a href="#/discover/artist" key={item.name}>
                                <img src={formatImageUrl(item.img1v1Url, 62) }></img>
                                <div className="info">
                                    <div className="name">{item.name}</div>
                                    <div className="alias">{item.alias.join(' ')}</div>
                                </div>
                        </a>
                        </div>
                        
                    )
                })
            }
        </div>
        <a href="" className="apply-to">申请成为网易音乐人</a>
    </SettleSingerWrapper>
}

export default memo(SettleSinger);