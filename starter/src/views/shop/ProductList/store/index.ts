import { combineReducers } from "@reduxjs/toolkit";
import reducers, { ShopProductListState, SLICE_NAME } from "./ProductSlice";
import type { TypedUseSelectorHook } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const reducer = combineReducers({
    data: reducers
})

export const useAppSelector: TypedUseSelectorHook<
    RootState & {
        [SLICE_NAME] : {
            data: ShopProductListState
        }
    }
> = useSelector

export * from './ProductSlice'
export {useAppDispatch} from "@/store"
export default reducer