import { TableQueries } from "@/@types/common";
import { apiGetShopSubCategory } from "@/services/ShopService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetTableRequest } from "aws-sdk/clients/glue";

type SubCategory = {
    id: string;
    sub_category_type: string;
    status: string;
}


export interface SubCategoryType{
    pageIndex: number;
    pageSize: number;
    total: number;
}

interface payloadType {
    data: TableQueries;
    params: string 
}

export type ShopSubCategoryListState = {
    loading: boolean
    subCategoryList: SubCategory[]

}

export const SLICE_NAME = 'shopSubCategoryList'

export const getSubCategory = createAsyncThunk(
    SLICE_NAME + '/getSubCategory',
    async(payload:payloadType)=>{
        const {data, params} = payload
        console.log("params", params)
        const response:any = await apiGetShopSubCategory(data, params)
        console.log("response",response.data)
        return response.data
        }
)

const initialTableData = {
    pageSize: 10,
    pageIndex: 1,
    total: 0
}

type initialStateType = {
    loading: boolean;
    subCategoryList: [],
    tableData: SubCategoryType,
    deleteConfirmation: boolean,
    selectedSubCategory: string
}

const initialState:initialStateType = {
    loading: false,
    subCategoryList: [],
    tableData: initialTableData,
    deleteConfirmation: false,
    selectedSubCategory: ''
}

const subCategoryListSlice = createSlice({
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
        setSelectedSubCategory: (state, action)=>{
            state.selectedSubCategory = action.payload
        }
    },
    extraReducers:(builder) =>{
        builder
        .addCase(getSubCategory.fulfilled, (state, action)=>{
            state.subCategoryList = action.payload.data
            state.tableData.total = action.payload.total
        })
        .addCase(getSubCategory.rejected, (state, action) => {
            console.error("Error in thunk:", action.error);
            state.loading = false;
        });
    }
})

export const {
    setTableData,
    setSelectedSubCategory,
    toggleDeleteConfirmation
} = subCategoryListSlice.actions
export default subCategoryListSlice.reducer