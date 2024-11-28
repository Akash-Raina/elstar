import { useNavigate } from "react-router-dom"
import ProductForm, { FormModel, SetSubmitting } from "../ProductForm"
import { apiCreateShopProduct } from "@/services/ShopService"
import { Notification, toast } from "@/components/ui"


 const NewProduct = ()=>{

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
        const success = await apiCreateShopProduct(values);
        setSubmitting(false)

        ifSuccess(success)
    }

    const navigate = useNavigate()
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