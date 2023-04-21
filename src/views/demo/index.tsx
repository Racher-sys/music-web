import React, {memo} from "react";
import type { ReactNode } from "react";

interface IProps{
    children?: ReactNode,
    name: "hjn",
    age: 18,
    height?: 188,
}

const Demo: React.FunctionComponent<IProps> = (props) =>{
    return <div>
        <p>name: {props.name}</p>
        <p>age: {props.age}</p>
        <p>{props.children}</p>
    </div>
}

Demo.defaultProps = {
    name: "hjn",
}

export default memo(Demo);