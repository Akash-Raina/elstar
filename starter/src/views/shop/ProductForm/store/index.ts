import type { RootState } from "@/store";
import { useSelector } from "react-redux";
import  type { TypedUseSelectorHook } from "react-redux";
import reducers, { ProductFormState, SLICE_NAME } from "./productFormSlice";
import { combineReducers } from "@reduxjs/toolkit";

const reducer = combineReducers({
    data: reducers
})

export const useAppSelector: TypedUseSelectorHook<
    RootState & {
        [SLICE_NAME] : {
            data: ProductFormState
        }
    }
> = useSelector

export * from './productFormSlice'
export {useAppDispatch} from "@/store"
export default reducer