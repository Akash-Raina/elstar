import ApiService from "./ApiService";

export async function apiGetSalesProducts<T, U extends Record<string, unknown>>(
    data: U
) {
    return ApiService.fetchData<T>({
        url: '/sales/products',
        method: 'post',
        data,
    })
}

export async function apiDeleteSalesProducts<
    T,
    U extends Record<string, unknown>
>(data: U) {
    return ApiService.fetchData<T>({
        url: '/sales/product/delete',
        method: 'delete',
        data,
    })
}

export async function apiCreateSalesProduct<
    T,
    U extends Record<string, unknown>
>(data: U){
    return ApiService.fetchData<T>({
        url: 'sales/product/create',
        method: 'post',
        data,
    })
}

export async function apiGetSalesProduct<T, U extends Record<string, unknown>>(params:U) {
    return ApiService.fetchData<T>({
        url: '/sales/product',
        method: 'get',
        params,
    })
}

export async function apiPutSalesProduct<T, U extends Record<string, unknown>>(
    data: U
) {
    return ApiService.fetchData<T>({
        url: '/sales/products/update',
        method: 'put',
        data,
    })
}
