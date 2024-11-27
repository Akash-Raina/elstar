import { apiGetAllCategory, apiGetAllSubCategory } from "@/services/ShopService"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export type ProductFormState = {
    categoryOptions:[]
    subCategoryOptions:[]
}


export const SLICE_NAME = 'productFormSlice'


export const getCategoryOptions = createAsyncThunk(
    SLICE_NAME + '/getCategoryOptions',
    async()=>{
        const response = await apiGetAllCategory()
        return response.data.data
    }
)
export const getSubCategoryOptions = createAsyncThunk(
    SLICE_NAME + '/getSubCategoryOptions',
    async(data)=>{
        const response:any = await apiGetAllSubCategory(data)
        return response.data.data
    }
)


const initialState = {
    categoryOptions:[],
    subCategoryOptions:[]
}

const productFormSlice = createSlice({
    name: `${SLICE_NAME}/state`,
    initialState,
    reducers:{ },
    extraReducers:(builder) =>{
        builder
        .addCase(getCategoryOptions.fulfilled, (state, action)=>{
            state.categoryOptions = action.payload
            
        })
        .addCase(getSubCategoryOptions.fulfilled, (state, action)=>{
            state.subCategoryOptions = action.payload
            
        })
    }
})

export const {} = productFormSlice.actions
export default productFormSlice.reducer