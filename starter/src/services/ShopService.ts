import { CategoryType } from "@/views/shop/CategoryList/store";
import ApiService from "./ApiService";
import { SubCategoryType } from "@/views/shop/SubCategory/store/subCategorySlice";
import { ProductListType } from "@/views/shop/ProductList/store/ProductSlice";



export async function apiGetShopCategory(data: CategoryType){
    return ApiService.fetchData({
        url: '/shop/allcategory',
        method: 'post',
        data
    })
}

export async function apiGetShopSubCategory(data:SubCategoryType, params:string){

    return ApiService.fetchData({
        url: `/shop/subcategory?id=${params}`,
        method: 'post',
        data,

    })
}

export async function apiGetShopProductList(data:ProductListType, params:string){

    return ApiService.fetchData({
        url: `/shop/productlist?id=${params}`,
        method: 'post',
        data
    })
}
