import { combineReducers } from "@reduxjs/toolkit";
import reducers, { ShopCategoryEditState, SLICE_NAME, } from './CategoryEditSlice'
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "@/store";

const reducer = combineReducers({
    data: reducers,
})

export const useAppSelector: TypedUseSelectorHook<
    RootState & {
        [SLICE_NAME]: {
            data: ShopCategoryEditState
        }
    }
> = useSelector

export * from './CategoryEditSlice'
export {useAppDispatch} from '@/store'
export default reducer