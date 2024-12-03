import { combineReducers } from "@reduxjs/toolkit";
import reducers, { SLICE_NAME, ShopProductEditState } from './ProductEditSlice'
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "@/store";

const reducer = combineReducers({
    data: reducers,
})

export const useAppSelector: TypedUseSelectorHook<
    RootState & {
        [SLICE_NAME]: {
            data: ShopProductEditState
        }
    }
> = useSelector

export * from './ProductEditSlice'
export {useAppDispatch} from '@/store'
export default reducer