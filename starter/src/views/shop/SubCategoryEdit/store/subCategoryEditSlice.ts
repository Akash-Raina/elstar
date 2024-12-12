import { apiDeleteShopSubCategory, apiGetImageUrl, apiGetShopSingleSubCategory, apiUpdateShopSubCategory } from "@/services/ShopService"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


type SubCategoryData = {
    id?: string
    status?: number
    sub_category_name?: string,
    img?: File
    url?: string
    category_id?: string,
    category_name?: string,
    category ?: {
        "value": number,
        "label": string
    }
}

type GetShopSubCategoryResponse = SubCategoryData

export const SLICE_NAME = "shopSubCategoryEdit"

export const getSubCategory =createAsyncThunk(
    SLICE_NAME + '/getCategory', //give it a name but why?
    async(data: {id: string}) =>{
        const response:any = await apiGetShopSingleSubCategory<
        GetShopSubCategoryResponse,
        {id:string}
        >(data)
        return response.data.data
    }
)

export const getImageUrl = async<T, U extends Record<string, unknown>> (data: U)=>{
    const response = await apiGetImageUrl<T, U>(data);
    console.log(response.data)
    return response.data
}

export const updateSubCategory = async<T, U extends Record<string, unknown>> (data: U)=>{
    const response = await apiUpdateShopSubCategory<T, U>(data);
    console.log(response.data)
    return response.data
}

export const deleteSubCategory = async <T, U extends Record<string, unknown>>(data: U)  => {
    const response = await apiDeleteShopSubCategory<T, U>(data);
    return response.data
}

export type ShopSubCategoryEditState = {
    loading : boolean
    subCategoryData: SubCategoryData
}

const initialState:ShopSubCategoryEditState = {
    loading: true,
    subCategoryData: {}
}

const subCategoryEditSlice = createSlice({
    name: `${SLICE_NAME}/state`,
    initialState,
    reducers: {},
    extraReducers:(builder)=>{
        builder
            .addCase(getSubCategory.fulfilled, (state, action)=>{
                state.subCategoryData = action.payload
                state.loading = false
            })
            .addCase(getSubCategory.pending, (state)=>{
                state.loading = true
            })
    }
})

export default subCategoryEditSlice.reducer