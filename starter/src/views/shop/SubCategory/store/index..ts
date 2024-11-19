import type { RootState } from "@/store";
import { useSelector } from "react-redux";
import  type { TypedUseSelectorHook } from "react-redux";
import reducers, { ShopSubCategoryListState, SLICE_NAME } from "./subCategorySlice";
import { combineReducers } from "@reduxjs/toolkit";

const reducer = combineReducers({
    data: reducers
})

export const useAppSelector: TypedUseSelectorHook<
    RootState & {
        [SLICE_NAME] : {
            data: ShopSubCategoryListState
        }
    }
> = useSelector

export * from './subCategorySlice'
export {useAppDispatch} from "@/store"
export default reducer