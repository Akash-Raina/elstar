import { apiGetShopProductList } from "@/services/ShopService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type Product = {
    id: string;
    product_name: string;
    status: string
}
export interface ProductListType{
    pageIndex: number;
    pageSize: number;
    total: number;
}
interface payloadType{
    data: ProductListType;
    params: string
}

export type ShopProductListState = {
    loading: boolean
    productList: Product[]
}

export const SLICE_NAME = 'shopProductList'

export const getList = createAsyncThunk(
    SLICE_NAME + '/getList',
    async(payload: payloadType)=>{
        const {data, params} = payload
        const response:any = await apiGetShopProductList(data, params)
        console.log("Data from backend",response.data)
        return response.data
    }
)

const initialTableData = {
    pageSize: 10,
    pageIndex: 1,
    total: 0
}

type initialStateType = {
    loading : boolean;
    productList: [],
    tableData: ProductListType
}

const initialState:initialStateType = {
    loading: false,
    productList: [],
    tableData: initialTableData
}

const productSlice = createSlice({
    name: `${SLICE_NAME}/state`,
    initialState,
    reducers:{
        setTableData: (state, action) => {
            state.tableData = action.payload
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(getList.fulfilled, (state, action)=>{
            state.productList = action.payload.data
            state.tableData.total = action.payload.total
        })
        .addCase(getList.rejected, (state, action) => {
            console.error("Error in thunk:", action.error);
            state.loading = false;
        });
    }
})

export const{
    setTableData
} = productSlice.actions

export default productSlice.reducer