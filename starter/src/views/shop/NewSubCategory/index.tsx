import { toast, Notification } from "@/components/ui";
import {apiCreateShopSubCategory, apiGetImageUrl } from "@/services/ShopService";
import { useNavigate } from "react-router-dom";
import { SubCategoryForm, SubCategoryFormModel, SubCategorySetSubmitting } from "../SubCategoryForm";

type ImageUrlResponse = {
    response: any
    fileUrl: string
}

const NewSubCategory = () => {
    const navigate = useNavigate();

    const getImageUrl = async <T, U extends Record<string, unknown>>(
        data: U
    ) => {
        const response = await apiGetImageUrl<T, U>(data)
        console.log(response.data)
        return response.data
    }

    const ifSuccess = (success:any) => {
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
            navigate("/app/subcategory");
        }
    };

    const onSubmit = async (
        values: SubCategoryFormModel, 
        setSubmitting: SubCategorySetSubmitting 
    ) => {

        if(values.imgList?.length === 0){

            const payload = {
                sub_category_name: values.sub_category_name,
                category_id: values.category?.value,
                status: values.status
            };

            const success = await apiCreateShopSubCategory(payload);
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
                sub_category_name: values.sub_category_name,
                category_id: values.category?.value,
                status:values.status,
                url: imageUrl.fileUrl
            }
            const success = await apiCreateShopSubCategory(data)
            setSubmitting(false)

            ifSuccess(success)
        }
    };

    const handleDiscard = () => {
        navigate('/category')
    }

    return (
        <SubCategoryForm 
            type = "new"
            onFormSubmit={onSubmit}
            onDiscard={handleDiscard}
        />
    );
};

export default NewSubCategory;
