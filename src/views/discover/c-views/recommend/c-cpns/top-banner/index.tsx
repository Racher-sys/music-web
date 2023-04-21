import React, {memo} from "react";
import type { FC, ReactNode } from "react";
import { useAppSelector } from "@/store";

interface IProps{
    children?: ReactNode,
}

const TopBanner: FC<IProps> = () =>{
    /** 从store中获取数据  */
    const { count } = useAppSelector((state) => {
        banners: state.recommend.banners
    })
    return <div>
        banners.map()
    </div>
}

export default memo(TopBanner);