import React, {memo} from "react";
import type { FC, ReactNode } from "react";
import { HeaderLeft, HeaderRight, HeaderWrapper } from "./style";
import headerTitles from '@/assets/data/header_titles.json'
import { NavLink } from "react-router-dom";
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';


interface IProps{
    children?: ReactNode,
}

const AppHeader: FC<IProps> = () =>{

    function showItem(item: any){
        if (item.type === 'path'){
            return <NavLink to={item.link}>
                {item.title}
                <i className="icon sprite_01"></i>
                </NavLink>
        }else{
            return <a href={item.link} rel="noreferrer" target="_blank">{item.title}</a>
        }
    }
    return <HeaderWrapper>
        <div className="content wrap-v1">
            <HeaderLeft>
                <a href="/" className="logo sprite_01">我的音乐</a>
                <div className="title-list">
                    {headerTitles.map(item => {
                        return <div className="item"  key={item.title}>{showItem(item)}</div>
                    })}
                </div>
            </HeaderLeft>
            <HeaderRight>
                <Input className="search" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />} />
                <span className="center">创作者中心</span>
                <span>登录</span>
            </HeaderRight>
        </div>
        <div className="divider"></div>
    </HeaderWrapper>
}

export default memo(AppHeader);