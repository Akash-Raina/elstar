import { useNavigate } from "react-router-dom"
import ProductForm, { FormModel, SetSubmitting } from "../ProductForm"
import { apiCreateShopProduct, apiGetShopProductImageUrl } from "@/services/ShopService"
import { Notification, toast } from "@/components/ui"

type ImageUrlResponse = {
    response: any
    fileUrl: string
}

const NewProduct = ()=>{
    const navigate = useNavigate()

    const getImageUrl = async <T, U extends Record<string, unknown>>(
        data: U
    ) => {
        const formData = new FormData();
    
        for (const key in data) {
            if (data[key] instanceof FileList) {
                
                Array.from(data[key] as FileList).forEach((file) => formData.append(key, file));
            } else {
                formData.append(key, data[key] as string);
            }
        }
        console.log("metadata", data)
        const response = await apiGetShopProductImageUrl<T, U>(data)
        console.log(response.data)
        return response.data
    }

    const addProduct = async (data: FormModel) => {
        const response = await apiCreateShopProduct<boolean, FormModel>(data)
        return response.data
    }

    const ifSuccess = (success: any) => {
        if (success) {
            toast.push(
                <Notification
                    title={'Successfuly added'}
                    type="success"
                    duration={2500}
                >
                    Product successfuly added
                </Notification>,
                {
                    placement: 'top-center',
                }
            )
            navigate('/app/productlist/newproduct')
        }
    }

    const handleFormSubmit = async(
        values: FormModel,
        setSubmitting: SetSubmitting
    )=>{

        if(values.imgList?.length === 0){
            const success = await addProduct(values);
            setSubmitting(false)
            ifSuccess(success)
        }else{
            const fileData ={
                img: values.img,
            }
            const imageUrl: ImageUrlResponse = await getImageUrl(fileData)

            const data = {
                ...values,
                url: imageUrl.fileUrl,
            }
            console.log(data)
            const success = await addProduct(data)
            setSubmitting(false)

            ifSuccess(success)
        }
              
    }

    const handleDiscard = () => {
        navigate('/productlist/1')
    }

    return (
        <>
            <ProductForm
                type="new"
                onFormSubmit={handleFormSubmit}
                onDiscard={handleDiscard}
            />
        </>
    )
}

export default NewProduct