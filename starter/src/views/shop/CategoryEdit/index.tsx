import { injectReducer, useAppSelector,useAppDispatch, } from "@/store"
import reducer, { getCategory, updateCategory } from "./store"
import Loading from "@/components/shared/Loading";
import isEmpty from "lodash/isEmpty";
import { FormModel, OnDeleteCallback, SetSubmitting } from "../ProductForm";
import DoubleSidedImage from "@/components/shared/DoubleSidedImage";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { CategoryForm, CategoryFormModel, CategorySetSubmitting } from "../CategoryForm";
import { toast,Notification } from "@/components/ui";


injectReducer('shopCategoryEdit', reducer)

const CategoryEdit = ()=>{

    const dispatch = useAppDispatch();
    const navigate = useNavigate()

    const data = useAppSelector(
        (state:any) => state.shopCategoryEdit.data.categoryData
    )

    const loading = useAppSelector(
        (state:any) => state.shopCategoryEdit.data.loading
    )


    const handleDiscard = () => {
        navigate('/category')
    }

    const handleFormSubmit = async(
        values:  CategoryFormModel,
        setSubmitting: CategorySetSubmitting
    ) =>{
        setSubmitting(true);
        const categoryData = {
            ...values
        };

        const success = await updateCategory(categoryData);
        setSubmitting(false);

        if(success){
            popNotification('updated');
        }

    }

    const popNotification = (keyword: string) => {
        toast.push(
            <Notification
                title={`Successfuly ${keyword}`}
                type="success"
                duration={2500}
            >
                Product successfuly{keyword}
            </Notification>,
            {
                placement: 'top-center',
            }
        )
        navigate('/category')
    }

    const handleDelete = async (setDialogOpen: OnDeleteCallback) => {
        console.log("deleted")
        // setDialogOpen(false)
        // const success = await deleteProduct({
        //     product_id: productData.id,
        // })
        // if (success) {
        //     popNotification('deleted')
        // }

    }

    const fetchData = (data:{id:string}) => {
        dispatch(getCategory(data))
    }

    useEffect(() => {
        const path = location.pathname.substring(
            location.pathname.lastIndexOf('/') + 1
        )
        const rquestParam = { id: path }
        fetchData(rquestParam)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.pathname])


    return <>
            <Loading loading={loading}>
        {!isEmpty(data) && (
            <>
                <div>Testing form</div>
                <CategoryForm
                    type="edit"
                    initialData={data}
                    onFormSubmit={handleFormSubmit}
                    onDiscard={handleDiscard}
                    onDelete={handleDelete}
                />
            </>
        )}
    </Loading>
    {!loading && isEmpty(data) && (
        <div className="h-full flex flex-col items-center justify-center">
            <DoubleSidedImage
                src="/img/others/img-2.png"
                darkModeSrc="/img/others/img-2-dark.png"
                alt="No product found!"
            />
            <h3 className="mt-8">No product found!</h3>
        </div>
    )}
    </>
}

export default CategoryEdit