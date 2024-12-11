import ApiService from "./ApiService";
import { TableQueries } from "@/@types/common";



export async function apiGetShopCategory(data: TableQueries){
    return ApiService.fetchData({
        url: '/shop/allcategory',
        method: 'post',
        data
    })
}

export async function apiGetShopSubCategory(data:TableQueries, params:string){

    return ApiService.fetchData({
        url: `/shop/subcategory?id=${params}`,
        method: 'post',
        data,

    })
}

export async function apiGetShopProductList(data:TableQueries, params:string){

    return ApiService.fetchData({
        url: `/shop/productlist?id=${params}`,
        method: 'post',
        data
    })
}

export async function apiGetAllCategory(){

    return ApiService.fetchData({
        url: `/shop/categorylist`,
        method: 'get'

    })
}

export async function apiGetAllSubCategory(data:any){
    return ApiService.fetchData({
        url:'/shop/subcategorylist',
        method:'post',
        data
    })
}

export async function apiCreateShopProduct<T,U extends Record<string, unknown>>(data: U){
    return ApiService.fetchData<T>({
        url:'/shop/newproduct',
        method:'post',
        data
    })
}

export async function apiCreateShopCategory(data:any){
    return ApiService.fetchData({
        url:'/shop/newcategory',
        method:'post',
        data
    })
}

export async function apiCreateShopSubCategory(data:any){
    return ApiService.fetchData({
        url: '/shop/newsubcategory',
        method: 'post',
        data
    })
}

export async function apiDeleteShopProduct(data:{product_id: string}){
    return ApiService.fetchData({
        url: '/shop/deleteproduct',
        method: 'delete',
        data
    })
}

export async function apiGetShopProduct<T, U extends Record<string, unknown>>(data:U){
    return ApiService.fetchData<T>({
        url: '/shop/getproduct',
        method:'post',
        data
    })
}

export async function apiUpdateShopProduct<T, U extends Record<string, unknown>>(data:U){

    return ApiService.fetchData<T>({
        url: '/shop/updateproduct',
        method:'put',
        data
    })
}

export async function apiGetShopSingleCategory<T, U extends Record<string, unknown>>(data:U){
    return ApiService.fetchData<T>({
        url: '/shop/getcategory',
        method:'post',
        data
    })
}

export async function apiUpdateShopCategory<T, U extends Record<string, unknown>>(data:U){

    return ApiService.fetchData<T>({
        url: '/shop/updatecategory',
        method:'put',
        data
    })
}

export async function apiGetShopSingleSubCategory<T, U extends Record<string, unknown>>(data:U){
    return ApiService.fetchData<T>({
        url: '/shop/getsubcategory',
        method:'post',
        data
    })
}

export async function apiUpdateShopSubCategory<T, U extends Record<string, unknown>>(data:U){

    return ApiService.fetchData<T>({
        url: '/shop/updatesubcategory',
        method:'put',
        data
    })
}

export async function apiDeleteShopCategory<T,U extends Record<string, unknown>>(data: U) {
    return ApiService.fetchData<T>({
        url: '/shop/deletecategorybyid',
        method: 'delete',
        data,
    })
}

export async function apiDeleteShopSubCategory<T,U extends Record<string, unknown>>(data: U) {
    return ApiService.fetchData<T>({
        url: '/shop/deletesubcategorybyid',
        method: 'delete',
        data,
    })
}

export async function apiDownloadCSV<T, U extends Record<string, unknown>>(data:U){
    return ApiService.fetchData<T>({
        url: '/shop/downloadlist',
        method:'post',
        data
    })
}

export async function apiGetShopProductImageUrl<T, U extends Record<string, unknown>>(data: U) {
    return ApiService.fetchData<T>({
        url: '/sales/product/getimageurl',
        method: 'post',
        data,
        headers: {
            'Content-Type': 'multipart/form-data'
        },
    })
}

