import { apiDeleteShopProduct, apiGetShopProduct, apiUpdateShopProduct } from "@/services/ShopService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


type ProductData = {
    id?: number,
    product_name?: string,
    sub_category_id?: number,
    status?: number,
    sku_id?: string,
    sub_category_name?: string,
    category_id?: number,
    category_name?: string,
    price?: number,
    tax?: number,
    discount?: number,
    sku?: string,
    unit?: number
}

export type ShopProductEditState = {
    loading: boolean
    productData: ProductData
}
type GetShopProductResponse = ProductData

export const SLICE_NAME = "shopProductEdit"

export const getProduct = createAsyncThunk(
    SLICE_NAME + '/getProduct',
    async(data:{id:string}) =>{
        const response = await apiGetShopProduct<
        GetShopProductResponse,
        {id:string}
        >(data)
        return response.data.data;
    }
)

export const updateProduct = async<T, U extends Record<string, unknown>> (data: U)=>{
    const response = await apiUpdateShopProduct<T, U>(data);
    console.log(response.data)
    return response.data
}

export const deleteProduct = async (data:{product_id: string})=>{
    const response = await apiDeleteShopProduct(data);
    return response
}

const initialState:ShopProductEditState  = {
    loading: true,
    productData: {}
}

const productEditSlice = createSlice({
    name: `${SLICE_NAME}/state`,
    initialState,
    reducers:{},
    extraReducers:(builder) =>{
        builder
            .addCase(getProduct.fulfilled, (state, action)=>{
                console.log("product payload", action.payload)
                state.productData = action.payload
                state.loading = false
            })
            .addCase(getProduct.pending, (state) =>{
                state.loading = true
            })
    }
})

export default productEditSlice.reducer