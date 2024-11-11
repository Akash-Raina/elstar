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
    console.log("formdata>>",data);
    return ApiService.fetchData<T>({
        url: 'sales/product/create',
        method: 'post',
        data,
        // headers:{
        //     'Content-Type': 'multipart/form-data'
        // }
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

export async function apiGetSalesProductImageUrl<T, U extends Record<string, unknown>>(
    data: U
) {

    const formData = new FormData();
    
    for (const key in data) {
        if (data[key] instanceof FileList) {
            // Append each file individually if it's a FileList
            Array.from(data[key] as FileList).forEach((file) => formData.append(key, file));
        } else {
            formData.append(key, data[key] as string);
        }
    }
    console.log(data)
    return ApiService.fetchData<T>({
        url: '/sales/product/getimageurl',
        method: 'post',
        data,
        headers: {
            'Content-Type': 'multipart/form-data'
        },
    })
}
