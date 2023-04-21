// 这边可以配置所有的路由

import React from "react"
import { lazy } from "react"
import { Navigate } from "react-router-dom"
import type { RouteObject } from "react-router-dom"
// import Discover from "@/views/discover"
// import Download from "@/views/download"
// import Friend from "@/views/friend"
// import Mine from "@/views/mine"

// 设置懒加载
const Discover = lazy(()=> import("@/views/discover"))
const Ranking = lazy(()=> import("@/views/discover/c-views/ranking")) 
const Recommend = lazy(()=> import("@/views/discover/c-views/recommend"))
const Songs = lazy(()=> import("@/views/discover/c-views/songs")) 
const Djradio = lazy(()=> import("@/views/discover/c-views/djradio"))
const Artist = lazy(()=> import("@/views/discover/c-views/artist")) 
const Album = lazy(()=> import("@/views/discover/c-views/album"))


const Download = lazy(()=> import("@/views/download"))
const Friend = lazy(()=> import("@/views/friend"))
const Mine = lazy(()=> import("@/views/mine"))






const routes: RouteObject[] = [
    {
        // 路由重定向
        path: '/',
        element: <Navigate to="/discover"/>
    },
    {
        path: '/discover',
        // 加入简括好是初始化实例
        element: <Discover />,
        children: [
            {
                path:'/discover',
                element: <Navigate to="/discover/recommend"/>
            },
            {
                path: '/discover/recommend',
                element: <Recommend />
            },
            {
                path: '/discover/ranking',
                element: <Ranking />
            },
            {
                path: '/discover/songs',
                element: <Songs />
            },
            {
                path: '/discover/djradio',
                element: <Djradio />
            },
            {
                path: '/discover/artist',
                element: <Artist />
            },
            {
                path: '/discover/album',
                element: <Album />
            }

        ]
    },
    {
        path: '/download',
        element: <Download />
    },
    {
        path: '/friend',
        element: <Friend />
    },
    {
        path: '/my',
        element: <Mine />
    }
]

export default routes