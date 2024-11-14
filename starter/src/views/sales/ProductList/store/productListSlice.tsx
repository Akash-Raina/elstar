import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { apiGetSalesProducts, apiDeleteSalesProducts } from "@/services/SalesService"
import { TableQueries } from "@/@types/common"


type Product = {
    product_id: string
    name: string
    productCode: string
    img: string
    category: string
    price: number
    stock: number
    status: number
}

type Products = Product[]

type GetSalesProductsResponse = {
    data: Products
    status: number
    products: Products
    total: number
}

export type SalesProductListState = {
    loading: boolean
    deleteConfirmation: boolean
    selectedProduct: string
    productList: Product[]
    tableData: TableQueries
}

type GetSalesProductsRequest = TableQueries


export const SLICE_NAME = 'salesProductList'

export const getProducts = createAsyncThunk(
    SLICE_NAME + '/getProducts',
    async (data: GetSalesProductsRequest) => {
        const response = await apiGetSalesProducts<
            GetSalesProductsResponse,
            GetSalesProductsRequest
        >(data)
        return response.data
    }
)

export const deleteProduct = async <T, U extends Record<string, unknown>>(
    data: U
)  => {
    const response = await apiDeleteSalesProducts<T, U>(data)
    return response.data
}

export const initialTableData: TableQueries = {
    pageSize: 10,
    pageIndex: 1,
    total: 0,
    query: ''
}

const initialState: SalesProductListState = {
    loading: false,
    deleteConfirmation: false,
    selectedProduct: '',
    productList: [],
    tableData: initialTableData
}

const productListSlice = createSlice({
    name :`${SLICE_NAME}/state`,
    initialState,
    reducers:{
        updateProductList: (state, action)=>{ 
            state.productList = action.payload
        },
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

    extraReducers:(builder) =>{
        builder
            .addCase(getProducts.fulfilled, (state, action)=>{
                state.productList = action.payload.products.map(product => ({
                    ...product,
                    status: action.payload.status,
                }))
                state.tableData.total = action.payload.total
                state.loading = false                
            })
            .addCase(getProducts.pending, (state) => {
                state.loading = true
            })            
    }
})

export const {
    setTableData,
    updateProductList,
    toggleDeleteConfirmation,
    setSelectedProduct
} = productListSlice.actions


export default productListSlice.reducer