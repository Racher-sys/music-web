import React, {memo} from "react";
import type { FC, ReactNode } from "react";
import { NewAlbumItemWrapper } from "./style";
import { formatImageUrl } from "@/utils/format";

interface IProps{
    children?: ReactNode,
    albumData: any
}

const NewAlbumItem: FC<IProps> = (props) =>{
    const { albumData } = props
    // 所有的成分的名字都要用大写字母表示。
    return (
        <NewAlbumItemWrapper>
            <div className="top">
                <img src={formatImageUrl(albumData.picUrl, 100)}/>
                <a className="cover sprite_cover"></a>
            </div>
            <div className="bottom">
                <div className="name">{albumData.name}</div>
                <div className="artist">{albumData.artist.name}</div>
            </div>
        </NewAlbumItemWrapper>
        )
}

export default memo(NewAlbumItem);