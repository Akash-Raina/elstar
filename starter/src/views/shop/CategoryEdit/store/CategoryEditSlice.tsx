import { apiGetShopSingleCategory, apiUpdateShopCategory } from "@/services/ShopService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


type CategoryData = {
    id?: string
    category_name?: string
}

type GetShopCategoryResponse = CategoryData

export const SLICE_NAME = "shopCategoryEdit"

export const getCategory =createAsyncThunk(
    SLICE_NAME + '/getCategory', //give it a name but why?
    async(data: {id: string}) =>{
        const response = await apiGetShopSingleCategory<
        GetShopCategoryResponse,
        {id:string}
        >(data)
        return response.data.name
    }
)

export const updateCategory = async(data:{id?:string, category_name?:string})=>{
    const response = await apiUpdateShopCategory(data); 
    return response.data
}

export type ShopCategoryEditState = {
    loading : boolean
    categoryData: CategoryData
}

const initialState:ShopCategoryEditState = {
    loading: true,
    categoryData: {}
}

const categoryEditSlice = createSlice({
    name: `${SLICE_NAME}/state`,
    initialState,
    reducers: {},
    extraReducers:(builder)=>{
        builder
            .addCase(getCategory.fulfilled, (state, action)=>{
                state.categoryData = action.payload
                state.loading = false
            })
            .addCase(getCategory.pending, (state)=>{
                state.loading = true
            })
    }
})

export default categoryEditSlice.reducer