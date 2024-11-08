import { toast } from "@/components/ui"
import { apiCreateSalesProduct, apiGetSalesProductImageUrl } from "@/services/SalesService"
import ProductForm,{
    FormModel,
    SetSubmitting
} from "@/views/sales/ProductForm"
import Notification from '@/components/ui/Notification'
import { useNavigate } from "react-router-dom"; 


type ImageUrlResponse = {
    response: any;
    fileUrl: string;
  };

export const ProductNew = ()=>{

    const navigate = useNavigate()

    const getImageUrl = async<T, U extends Record<string, unknown>> (data: U)=>{
        const response = await apiGetSalesProductImageUrl<T, U>(data);
        console.log(response.data)
        return response.data
    }

    const addProduct = async(data: FormModel) =>{
        const response = await apiCreateSalesProduct<boolean, FormModel>(data)
        return response.data
    }

    const handleFormSubmit = async(
        values: FormModel,
        SetSubmitting: SetSubmitting
    )=>{

        SetSubmitting(true)
        const fileData = {
            img: values.img
        }
        const imageUrl:ImageUrlResponse  = await getImageUrl(fileData)

        const data = {
            ...values,
            url:imageUrl.fileUrl
        }
        console.log(data)
        const success = await addProduct(data)
        SetSubmitting(false)
        if(success){
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
            navigate('/app/sales/product-list')
        }
    }

    const handleDiscard = ()=>{
        navigate('/app/sales/product-list')
    }

    return <>
        <ProductForm 
        type="new"
        onFormSubmit={handleFormSubmit}
        onDiscard={handleDiscard}
        />
    </>
}