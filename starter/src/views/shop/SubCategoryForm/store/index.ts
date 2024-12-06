import type { RootState } from "@/store";
import { useSelector } from "react-redux";
import  type { TypedUseSelectorHook } from "react-redux";
import reducers, { SubCategoryFormState, SLICE_NAME } from "./subCategoryFormSlice";
import { combineReducers } from "@reduxjs/toolkit";

const reducer = combineReducers({
    data: reducers
})

export const useAppSelector: TypedUseSelectorHook<
    RootState & {
        [SLICE_NAME] : {
            data: SubCategoryFormState
        }
    }
> = useSelector

export * from './subCategoryFormSlice'
export {useAppDispatch} from "@/store"
export default reducer