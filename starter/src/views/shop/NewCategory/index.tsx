
import { toast, Notification } from "@/components/ui"
import { apiCreateShopCategory, apiGetImageUrl } from "@/services/ShopService"
import { useNavigate } from "react-router-dom"
import { CategoryForm, CategoryFormModel, CategorySetSubmitting } from "../CategoryForm"

type ImageUrlResponse = {
    response: any
    fileUrl: string
}

const NewCategory = ()=>{

    const navigate = useNavigate();

    const getImageUrl = async <T, U extends Record<string, unknown>>(
        data: U
    ) => {
        console.log("data", data)
        const response = await apiGetImageUrl<T, U>(data)
        console.log(response.data)
        return response.data
    }

    const ifSuccess = (success: any) => {
        if (success) {
            toast.push(
                <Notification
                    title="Successfully added"
                    type="success"
                    duration={2500}
                >
                    Sub-category successfully added
                </Notification>,
                {
                    placement: "top-center",
                }
            );
            navigate("/app/subcategory"); // Navigate to another page after submission
        }
    };
    
    const onSubmit = async(
        values: CategoryFormModel, 
        setSubmitting: CategorySetSubmitting
    )=>{
        if(values.imgList?.length === 0){

            const payload = {category_name: values.category_name, status: values.status}

            const success = await apiCreateShopCategory(payload);
            setSubmitting(false);
    
            ifSuccess(success)
        }
        else{
            const fileData = {
                img: values.img,
            }
            console.log("fileData", fileData)
            const imageUrl: ImageUrlResponse = await getImageUrl(fileData)

            const data = {
                category_name: values.category_name,
                status: values.status,
                url: imageUrl.fileUrl
            }
            const success = await apiCreateShopCategory(data)
            setSubmitting(false)

            ifSuccess(success)
        }
        
    }

    const handleDiscard = () => {
        navigate('/category')
    }

    return <>
        <CategoryForm
            type="new"
            onFormSubmit={onSubmit}
            onDiscard={handleDiscard}
        />
    </>
}


export default NewCategory