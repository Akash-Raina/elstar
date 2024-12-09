import { TableQueries } from "@/@types/common";
import { apiGetShopCategory } from "@/services/ShopService"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { bool } from "aws-sdk/clients/signer";

type Category = {
    id: string;
    category_name: string;
    status: string;
}

export interface CategoryType{
    pageIndex: number;
    pageSize: string;
    total: string
}

interface BrandListType{
    labeL: string
}

// type Categories  = Category[]

// type GetSalesProductsResponse = {
//     data: Category[]
// }

export type ShopCategoryListState = {
    loading: boolean
    categoryList: Category[]
    brandList: BrandListType
    tableData: TableQueries
    deleteConfirmation: boolean
    selectedCategory: string
}

type GetSalesCategoryRequest = TableQueries;

export const SLICE_NAME = 'shopCategoryList'


export const getCategory = createAsyncThunk(
    SLICE_NAME + '/getCatgory',
    async(data: GetSalesCategoryRequest)=>{
        const response = await apiGetShopCategory(data)
        return response.data
    }
)

const initialTableData = {
    pageSize: 10,
    pageIndex: 1,
    total: 0
}


const initialState = {
    loading: false,
    categoryList: [],
    tableData: initialTableData,
    brandList: {},
    selectedCategory: '',
    deleteConfirmation: false
}


const categoryListSlice = createSlice({
    name: `${SLICE_NAME}/state`,
    initialState,
    reducers:{
        setTableData: (state, action) => {
            state.tableData = action.payload
        },
        toggleDeleteConfirmation: (state, action)=>{
            console.log("testing delete confirm", action.payload)
            state.deleteConfirmation = action.payload
        },
        setSelectedCategory: (state, action)=>{
            state.selectedCategory = action.payload
        }
    },
    extraReducers:(builder) =>{
        builder
        .addCase(getCategory.fulfilled, (state, action:any)=>{
            state.categoryList = action.payload.data
            state.tableData.total = action.payload.total
            state.brandList = action.payload.brand_value
            
        })
    }
})

export const {
    setTableData,
    setSelectedCategory,
    toggleDeleteConfirmation
} = categoryListSlice.actions
export default categoryListSlice.reducer