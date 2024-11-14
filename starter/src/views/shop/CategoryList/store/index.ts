import type { RootState } from "@/store";
import { useSelector } from "react-redux";
import  type { TypedUseSelectorHook } from "react-redux";
import reducers, { ShopCategoryListState, SLICE_NAME } from "./categoryListSlice";
import { combineReducers } from "@reduxjs/toolkit";

const reducer = combineReducers({
    data: reducers
})

export const useAppSelector: TypedUseSelectorHook<
    RootState & {
        [SLICE_NAME] : {
            data: ShopCategoryListState
        }
    }
> = useSelector

export * from './categoryListSlice'
export {useAppDispatch} from "@/store"
export default reducer