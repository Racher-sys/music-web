import React, {memo} from "react";
import type { FC, ReactNode } from "react";
import { SongMenuItemWrapper } from "./style";
import { formatCount, formatImageUrl } from "@/utils/format";

interface IProps{
    children?: ReactNode,
    itemData: any
}

const SongMenuItem: FC<IProps> = (props) =>{
    return <SongMenuItemWrapper>
        <div className="top">
            <img src={formatImageUrl(props.itemData.picUrl, 140)} alt="" />
            <div className="cover sprite_cover">
                <div className="info sprite_cover">
                    <span>
                        <i className="handset sprite_icon"></i>
                        <span className="count">{formatCount(props.itemData.playCount)}</span>
                    </span>
                    <i className="play sprite_icon"></i>
                </div>
            </div>
        </div>
        <div className="bottom">
            {props.itemData.name}
        </div>
    </SongMenuItemWrapper>
}

export default memo(SongMenuItem);