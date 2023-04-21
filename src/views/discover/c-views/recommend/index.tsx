import { useAppDispatch } from "@/store";
import React, {memo, useEffect} from "react";
import type { FC, ReactNode } from "react";
import { fetchBannerDataAction } from "./store/recommend";

interface IProps{
    children?: ReactNode,
}

const Recommend: FC<IProps> = () =>{
    /** 发起action（获取数据） */
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchBannerDataAction())
    }, [])
    /**  */
    return (<div>
        Recommend
    </div>)
}

export default memo(Recommend);