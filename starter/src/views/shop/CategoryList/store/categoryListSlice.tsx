import { apiGetShopCategory } from "@/services/ShopService"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

type Category = {
    category_name: string;
    status: string;
}

export interface CategoryType{
    pageIndex: string;
    pageSize: string;
    total: string
}

// type Categories  = Category[]

// type GetSalesProductsResponse = {
//     data: Category[]
// }

export type ShopCategoryListState = {
    loading: boolean
    categoryList: Category[]

}

type GetSalesProductsRequest = CategoryType;

export const SLICE_NAME = 'shopCategoryList'


export const getCategory = createAsyncThunk(
    SLICE_NAME + '/getCatgory',
    async(data: GetSalesProductsRequest)=>{
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
    tableData: initialTableData
}

const categoryListSlice = createSlice({
    name: `${SLICE_NAME}/state`,
    initialState,
    reducers:{
        setTableData: (state, action) => {
            state.tableData = action.payload
        }
    },
    extraReducers:(builder) =>{
        builder
        .addCase(getCategory.fulfilled, (state, action)=>{
            console.log('extrareducers',action.payload.data)
            state.categoryList = action.payload.data
        })
    }
})

export const {
    setTableData
} = categoryListSlice.actions
export default categoryListSlice.reducer