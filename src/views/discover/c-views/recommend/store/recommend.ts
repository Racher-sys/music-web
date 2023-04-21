import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getBanners } from "../service/recommend";


// 在Redux中发送异步请求
export const fetchBannerDataAction = createAsyncThunk('banners', async ( arg, { dispatch }) => {
    const res = await getBanners()
    dispatch(changeBannersAction (res.banners))
    return res.banners
})

interface IRecommendState {
    banners: any[]
}

const initialState: IRecommendState = {
    banners: []
}

const recommendSlice =  createSlice({
    name: 'recommend',
    initialState,
    reducers: {
        changeBannersAction(state, { payload }){
            state.banners = payload
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

export const { changeBannersAction } = recommendSlice.actions
export default recommendSlice.reducer