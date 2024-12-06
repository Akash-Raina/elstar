import { apiGetAllCategory } from "@/services/ShopService"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


export type SubCategoryFormState = {
    categoryOptions:[]
}

export const SLICE_NAME = 'SubCategoryFormSlice'

export const getCategoryOptions = createAsyncThunk(
    SLICE_NAME + 'getCategoryOptions',
    async()=>{
        const response:any = await apiGetAllCategory()
        return response.data.data
    }
)

const initialState = {
    categoryOptions:[],
}

const SubCategoryFormSlice = createSlice({
    name: `${SLICE_NAME}/state`,
    initialState,
    reducers:{ },
    extraReducers:(builder) =>{
        builder
        .addCase(getCategoryOptions.fulfilled, (state, action)=>{
            state.categoryOptions = action.payload
            
        })
    }
})

export const SubCategoryFormReducer =  SubCategoryFormSlice.actions
export default SubCategoryFormSlice.reducer 