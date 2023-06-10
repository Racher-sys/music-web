import React, {memo} from "react";
import type { FC, ReactNode } from "react";
import { TopRankingWrapper } from "./style";
import AreaHeaderV1 from "@/components/area-header-v1";
import { useAppSelector } from "@/store";
import { shallowEqual } from "react-redux";
import TopRankingItem from "../top-ranking-item";

interface IProps{
    children?: ReactNode,
}

const TopRanking: FC<IProps> = () =>{
    const {topRankings = []} = useAppSelector( (state) => ({
        topRankings: state.recommend.topRanking
    }), shallowEqual)
 
    return <TopRankingWrapper>
        <AreaHeaderV1 title="榜单" moreLink="/discover/ranking" />
        <div className="content">
            {topRankings.map(item => {
                return <TopRankingItem key={item.id} itemData={item}> </TopRankingItem>
            })}
        </div>
    </TopRankingWrapper>
}

export default memo(TopRanking);