import { createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IState {
    count: number
    message: string
    height: number
    direction: 'left' | 'right' | 'up' | 'down'
    names: string[]
}

const initialState: IState = {
    count: 100,
    message:'hello',
    height: 1.88,
    // 这边他会根据你的数值自动识别变量类型，但是如果想要申明联合类型，则可以申明类型
    direction: 'left',
    names: []
}


const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        // 接收两个值state和action，state是当前的值，action是指描述发生了什么。
        changeMessageAction(state, {payload}: PayloadAction<string>){
            state.message = payload
        }
    }
})

export const { changeMessageAction } = counterSlice.actions
export default counterSlice.reducer