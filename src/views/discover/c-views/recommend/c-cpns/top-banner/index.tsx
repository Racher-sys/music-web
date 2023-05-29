import React, {memo, useRef, useState} from "react";
import type { FC, ReactNode, ElementRef } from "react";
import { useAppSelector } from "@/store";
import { shallowEqual } from "react-redux";
import { BannerControl, BannerLeft, BannerRight, BannerWrapper } from "./style";
import { Carousel } from 'antd';
import classNames from "classnames";

interface IProps{
    children?: ReactNode,
}

const TopBanner: FC<IProps> = () =>{
    // 获取轮播图的组件,定义内部的元素
    const bannerRef = useRef<ElementRef<typeof Carousel>>(null)

    const [currentIndex, setCurrentIndex] = useState(0)

    /** 从store中获取数据  */
    const { banners} = useAppSelector((state) => ({
        banners: state.recommend.banners
    }),shallowEqual)

    /**轮播图切换按钮事件 */
    function handlePrevClick(){
        bannerRef.current?.prev();
    }
    function handleNextClick(){
        bannerRef.current?.next();
    }

    /**背景图片切换事件 */
    function handleAfterChange(current: number){
        setCurrentIndex(current);
    }

    // 获取当前轮播图呈现的图片并且加入模糊效果
    let imgUrl = banners[currentIndex]?.imageUrl
    if (imgUrl){
        imgUrl = imgUrl + "?imageView&blur=40x20";
    }
    

    return <BannerWrapper
        style={{
            background: `url("${imgUrl}")
            center center/ 6000px`
        }}>
        <div className="banners wrap-v2">
            <BannerLeft>
            <Carousel autoplay effect="fade" ref={bannerRef} afterChange={handleAfterChange} dots={false}>
                {banners.map(item => {
                    return <div className="banner-item" key={item.imageUrl}>
                        <img className="image" src={item.imageUrl} alt={item.typeTitle}/>
                    </div>
                })}  
            </Carousel>
            <ul className="dots">
                {banners.map((item, index) => {
                    return <li key={item.imageUrl}>
                        <span className={classNames('item', {
                            active: index === currentIndex 
                        })}></span>
                        </li>
                })}
            </ul>
            </BannerLeft>
            <BannerRight>

            </BannerRight>
            
            <BannerControl>
                <button className="btn left" onClick={handlePrevClick}></button>
                <button className="btn right" onClick={handleNextClick}></button>
            </BannerControl>
        </div>  
    </BannerWrapper>
}

export default memo(TopBanner);