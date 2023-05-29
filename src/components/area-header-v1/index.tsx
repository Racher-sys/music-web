import React, {memo} from "react";
import type { FC, ReactNode } from "react";
import { Link } from "react-router-dom";
import { AreaHeaderWrapper } from "./style";
interface IProps{
    children?: ReactNode,
    title: string,
    keywords?: string[],
    more?: string,
    moreLink: string
}

const AreaHeaderV1: FC<IProps> = (props) =>{
    const {title, keywords = [], more = "更多", moreLink = "/"} = props
    return <AreaHeaderWrapper className="sprite_02">
        <div className="left">
            <h2 className="title">{title}</h2>
            <div className="keywords">
                {keywords.map(item => {
                    return(
                        <div className="item" key={item}>
                            <span className="link">{item}</span>
                            <span className="divider">|</span>
                        </div>
                    )
                })}
            </div>
        </div>
        <div className="right">
            <Link className="more" to={moreLink}>{more}</Link>
            <i className="icon sprite_02 "></i>
        </div>
        
    </AreaHeaderWrapper>
}

export default memo(AreaHeaderV1);