import React, {memo} from "react";
import type { FC, ReactNode } from "react";
import { AreaHeaderV2Wrapper } from "./style";

interface IProps{
    children?: ReactNode,
    title?: string,
    more?: string,
    moreLink?: string
}

const AreaHeaderV2: FC<IProps> = (props) =>{
    const {title, more, moreLink} = props
    return <AreaHeaderV2Wrapper>
        <h3 className="title">{title}</h3>
       {more && moreLink && <a href={moreLink} className="more">{more}</a>}
    </AreaHeaderV2Wrapper>
}

export default memo(AreaHeaderV2);