import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./modules/counter";
import { useSelector, TypedUseSelectorHook, useDispatch, shallowEqual } from "react-redux";
import recommendReducer from "../views/discover/c-views/recommend/store/recommend"
import playerReducer from "../views/player/store/player"
const store = configureStore({
    reducer: {
        counter: counterReducer,
        recommend: recommendReducer,
        player: playerReducer
    }
})


type GetStateFnType = typeof store.getState
export type IRootState = ReturnType<GetStateFnType>
type GetDispatchType = typeof store.dispatch


// useSelector的hook
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
// useAppDispatch是一个函数类型
export const useAppDispatch: () => GetDispatchType = useDispatch

export const shallowEqualApp = shallowEqual

export default store