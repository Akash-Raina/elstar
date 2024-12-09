import { injectReducer, useAppDispatch } from "@/store"
import reducer, { deleteSubCategory, getSubCategory, updateSubCategory, useAppSelector } from "./store"
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { DoubleSidedImage, Loading } from "@/components/shared";
import isEmpty from "lodash/isEmpty";
import { OnDeleteCallback, SubCategoryForm, SubCategoryFormModel, SubCategorySetSubmitting } from "../SubCategoryForm";
import { toast, Notification } from "@/components/ui";

injectReducer('shopSubCategoryEdit', reducer)

const SubCategoryEdit = ()=>{

    const {id} = useParams();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    
    const data = useAppSelector(
        (state:any) => state.shopSubCategoryEdit.data.subCategoryData
    )

    const loading = useAppSelector(
        (state:any) => state.shopSubCategoryEdit.data.loading
    )       

    const handleDiscard = () => {
        navigate('/subcategory/1')
    }

    
    const fetchData = (data:{id:string}) => {
        dispatch(getSubCategory(data))
    }

    const handleDelete = async (setDialogOpen: OnDeleteCallback) => {
        setDialogOpen(false)
        const success = await deleteSubCategory({
            id: id,
        })
        if (success) {
            popNotification('deleted')
        }

    }

    const handleFormSubmit = async(
        values:  SubCategoryFormModel,
        setSubmitting: SubCategorySetSubmitting
    ) =>{
        setSubmitting(true);
        const categoryData = {
            ...values,
            id:id
        };

        const success = await updateSubCategory(categoryData);
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
                    <SubCategoryForm
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

export default SubCategoryEdit
