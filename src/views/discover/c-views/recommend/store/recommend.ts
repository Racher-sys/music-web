import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getBanners, getHotRecommend, getNewAlbum, getSettleSinger, getTopRanking } from "../service/recommend";


// 在Redux中发送异步请求
export const fetchBannerDataAction = createAsyncThunk('banners', 
    async ( arg, { dispatch }) => {
    const res = await getBanners()
    dispatch(changeBannersAction (res.banners))
})


export const fetchHotRecommendAction = createAsyncThunk('hotRecommend',
    async (arg, {dispatch}) => {
        const res = await getHotRecommend(8)
        dispatch(changeHotRecommendAction (res.result))
    }
)

export const fetchNewAlbumAction = createAsyncThunk('newAlbum',
    async (arg, {dispatch}) => {
        const res = await getNewAlbum()
        dispatch(changeNewAlbumAction (res.albums))
        // console.log(res)
    }
)
export const fetchSettleSingerAction = createAsyncThunk('settleSinger',
    async (arg, {dispatch}) => {
        const res = await getSettleSinger(5)
        // console.log(res)
        dispatch(changeSettleSingerAction (res.artists))
    }
)
// 飙升榜的id:19723756 ; 新歌榜的id: 3779629; 原创榜的id: 2884035;
// 可以有两种方式存储数据，一种是三种id的数据分开存储，每获取一个数据，不需要等到其他几个都获取到就可以渲染出来
// 还有一种是一起存储，这样做的好处就是可以并行渲染，因为榜单组件在比较下面，可以等到数据全部都获取了再渲染，问题不大。
// 一起存储需要保障两个点，一个是获取到所有数据，二是这些数据是按顺序存储的。
const rankIds = [19723756, 3779629, 2884035]
const promises: Promise<any>[] = []
export const fetchTopRankingAction = createAsyncThunk('topRanking',
    // async (arg, {dispatch}) => {
    //     for (const id of rankIds){
    //         const res = await getTopRanking(id)
    //         console.log(res)
    //     }
    // } 
    (_, { dispatch }) => {
        for (const id of rankIds){
            promises.push(getTopRanking(id))
        }
        Promise.all(promises).then((res) => {
            const playlists = res
            .filter((item) => item.playlist)
            .map((item) => item.playlist)
            dispatch(changeTopRankingAction (playlists))
        })
    }
)

interface IRecommendState {
    banners: any[]
    hotRecommend: any[]
    newAlbum: any[]
    topRanking: any[]
    settleSinger: any[]
}

const initialState: IRecommendState = {
    banners: [],
    hotRecommend: [],
    newAlbum: [],
    topRanking: [],
    settleSinger: []
}

const recommendSlice =  createSlice({
    name: 'recommend',
    initialState,
    reducers: {
        changeBannersAction(state, { payload }){
            state.banners = payload
        },
        changeHotRecommendAction(state, { payload }){
            state.hotRecommend = payload
        },
        changeNewAlbumAction(state, {payload}){
            state.newAlbum = payload
        },
        changeTopRankingAction(state, {payload}){
            state.topRanking = payload
        },
        changeSettleSingerAction(state, {payload}){
            state.settleSinger = payload
        }
    }
    // extraReducers: (builder) => {
    //     // 获取到请求之前
    //     builder.addCase(fetchBannerDataAction.pending, () => {
    //         console.log('pending')
    //     })
    //     // 请求成功
    //     .addCase(fetchBannerDataAction.fulfilled, (state, { payload }) => {
    //         state.banners = payload
    //     })
    //     // 请求失败
    //     .addCase(fetchBannerDataAction.rejected, () => {
    //         console.log('rejected')
    //     })
    // }
})


export const { changeBannersAction, changeHotRecommendAction, changeNewAlbumAction, changeTopRankingAction, changeSettleSingerAction } = recommendSlice.actions
export default recommendSlice.reducer
