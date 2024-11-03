import { toast } from "@/components/ui"
import { apiCreateSalesProduct } from "@/services/SalesService"
import ProductForm,{
    FormModel,
    SetSubmitting
} from "@/views/sales/ProductForm"
import Notification from '@/components/ui/Notification'
import { useNavigate } from "react-router-dom"

export const ProductNew = ()=>{

    const navigate = useNavigate()
    const addProduct = async(data: FormModel) =>{
        const response = await apiCreateSalesProduct<boolean, FormModel>(data)
        return response.data
    }

    const handleFormSubmit = async(
        values: FormModel,
        SetSubmitting: SetSubmitting
    )=>{
        console.log(values)
        SetSubmitting(true)
        const success = await addProduct(values)
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