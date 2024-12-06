import { combineReducers } from "@reduxjs/toolkit";
import reducers, { ShopSubCategoryEditState, SLICE_NAME, } from './subCategoryEditSlice'
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "@/store";

const reducer = combineReducers({
    data: reducers,
})

export const useAppSelector: TypedUseSelectorHook<
    RootState & {
        [SLICE_NAME]: {
            data: ShopSubCategoryEditState
        }
    }
> = useSelector

export * from './subCategoryEditSlice'
export {useAppDispatch} from '@/store'
export default reducer