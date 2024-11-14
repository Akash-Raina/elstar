import { CategoryType } from "@/views/shop/CategoryList/store";
import ApiService from "./ApiService";



export async function apiGetShopCategory(data: CategoryType){
    return ApiService.fetchData({
        url: '/shop/allcategory',
        method: 'post',
        data
    })
}
