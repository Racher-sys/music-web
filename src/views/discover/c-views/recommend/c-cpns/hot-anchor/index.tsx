import React, {memo} from "react";
import type { FC, ReactNode } from "react";
import { HotAnchorWrapper } from "./style";
import AreaHeaderV2 from "@/components/area-header-v2";
import { hotRadios } from "@/assets/data/local_data"
import { formatImageUrl } from "@/utils/format";

interface IProps{
    children?: ReactNode,
}

const HotAnchor: FC<IProps> = () =>{
    return <HotAnchorWrapper>
        <AreaHeaderV2 title="热门主播"/>
        <div className="anchor-list">
            {hotRadios.map(item => {
                return <div className="item" key={item.picUrl}>
                    <img src={formatImageUrl(item.picUrl, 40)}></img>
                    <div className="info">
                        <p className="name">{item.name}</p>
                        <p className="position">{item.position}</p>
                    </div>
                </div>
            })}
        </div>
    </HotAnchorWrapper>
}

export default memo(HotAnchor);