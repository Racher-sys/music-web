import React, {ElementRef, memo, useRef} from "react";
import type { FC, ReactNode } from "react";
import { NewAlbumWrapper } from "./style";
import AreaHeaderV1 from "@/components/area-header-v1";
import { Carousel } from 'antd';
import { useAppSelector } from "@/store";
import { shallowEqual } from "react-redux";
import NewAlbumItem from "@/components/new-album-item";

interface IProps{
    children?: ReactNode,
}

const NewAlbum: FC<IProps> = () =>{
    const bannerRef = useRef<ElementRef<typeof Carousel>>(null)

    /**从store中获取数据 */
    const { albums } = useAppSelector((state) => ({
        albums: state.recommend.newAlbum
    }), shallowEqual)

    /**轮播图切换按钮事件 */
    function handleNextClick(){
        bannerRef.current?.next();
    }
    function handlePrevClick(){
        bannerRef.current?.prev();
    }

    return(
        <NewAlbumWrapper>
            <AreaHeaderV1 title="新碟上架" moreLink="/discover/album" />
            <div className="content">
                <button className="sprite_02 arrow arrow-left" onClick={handlePrevClick}></button>
                <div className="banner" >
                    <Carousel dots={false} ref={bannerRef} speed={1000}>
                        {[0,1].map(item => {
                            return <div>
                                <div className="album-list" key={item}>
                                {
                                    albums.slice(item *5, (item+1)*5).map((album) => {
                                        return <NewAlbumItem albumData={album} key={album.id}/>
                                    })
                                }
                            </div>
                                
                                </div>
                        })}
                    </Carousel>
                </div>
                <button className="sprite_02 arrow arrow-right" onClick={handleNextClick}></button>
            </div>
        </NewAlbumWrapper>
    )
}

export default memo(NewAlbum);