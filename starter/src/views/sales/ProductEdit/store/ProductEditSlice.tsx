import { apiDeleteSalesProducts, apiGetSalesProduct, apiGetSalesProductImageUrl, apiPutSalesProduct } from "@/services/SalesService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type ProductData = {
    product_id?: string
    product_name?: string
    code?: string
    img?:File
    url?:string
    categories?: string
    price?: number
    sku?: number
    status?: number
    bulk__dp?: number
    description?: string
    taxRate?: 6
    tags?: string[]
    brand?: string
    vendor?: string
}

export type SalesProductEditState = {
    loading: boolean
    productData : ProductData
}

type GetSalesProductResponse = ProductData

export const SLICE_NAME = "salesProductEdit"

export const getProduct = createAsyncThunk(
    SLICE_NAME + '/getProducts',
    async(data:{id: string}) =>{
        const response = await apiGetSalesProduct<
            GetSalesProductResponse,
            {id: string}
        >(data)
        console.log(response.data)
        return response.data
    }
)

export const getImageUrl = async<T, U extends Record<string, unknown>> (data: U)=>{
    const response = await apiGetSalesProductImageUrl<T, U>(data);
    console.log(response.data)
    return response.data
}

export const updateProduct = async<T, U extends Record<string, unknown>> (data: U)=>{
    const response = await apiPutSalesProduct<T, U>(data);
    console.log(response.data)
    return response.data
}


export const deleteProduct = async <T, U extends Record<string, unknown>>(
    data: U
)  => {
    const response = await apiDeleteSalesProducts<T, U>(data)
    return response.data
}

const initialState: SalesProductEditState = {
    loading: true,
    productData: {},
}

const productEditSlice = createSlice({
    name: `${SLICE_NAME}/state`,
    initialState,
    reducers:{},
    extraReducers:(builder) =>{
        builder
            .addCase(getProduct.fulfilled, (state, action)=>{
                state.productData = action.payload
                state.loading = false
            })
            .addCase(getProduct.pending, (state)=>{
                state.loading = true
            })
    }
})

export default productEditSlice.reducer