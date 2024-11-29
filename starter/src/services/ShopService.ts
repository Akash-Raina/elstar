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

export async function apiCreateShopProduct(data:any){
    return ApiService.fetchData({
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