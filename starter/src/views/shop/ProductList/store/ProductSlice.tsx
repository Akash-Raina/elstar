import { TableQueries } from "@/@types/common";
import { apiDeleteShopProduct, apiGetShopProductList } from "@/services/ShopService";
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
    data: TableQueries;
    params: string
}

export type ShopProductListState = {
    loading: boolean
    productList: Product[]
    deleteConfirmation: boolean
    tableData: TableQueries
    selectedProduct: string
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

export const deleteProduct = async(data: {product_id: string}) => {
    const response = await apiDeleteShopProduct(data);
    return response.data
}

const initialTableData: TableQueries = {
    pageSize: 10,
    pageIndex: 1,
    total: 0,
    query: ''
}



const initialState:ShopProductListState = {
    loading: false,
    productList: [],
    tableData: initialTableData,
    selectedProduct: '',
    deleteConfirmation: false
}

const productSlice = createSlice({
    name: `${SLICE_NAME}/state`,
    initialState,
    reducers:{
        setTableData: (state, action) => {
            state.tableData = action.payload
        },
        toggleDeleteConfirmation: (state, action)=>{
            state.deleteConfirmation = action.payload
        },
        setSelectedProduct: (state, action)=>{
            state.selectedProduct = action.payload
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
    setTableData,
    toggleDeleteConfirmation,
    setSelectedProduct
} = productSlice.actions

export default productSlice.reducer