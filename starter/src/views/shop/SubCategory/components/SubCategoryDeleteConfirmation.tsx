import { ConfirmDialog } from "@/components/shared"
import { getSubCategory, toggleDeleteConfirmation } from "../store/subCategorySlice";
import { useAppDispatch, useAppSelector } from "@/store";
import { toast, Notification } from "@/components/ui";
import { deleteSubCategory } from "../../SubCategoryEdit/store";
import { useParams } from "react-router-dom";

export const SubCategoryDeleteConfirmation = ()=>{
    const dispatch = useAppDispatch();  
    const {id} = useParams();
    const dialogOpen = useAppSelector(
        (state:any) => state.shopSubCategoryList.data.deleteConfirmation
    )
    const tableData = useAppSelector(
        (state: any) => state.shopSubCategoryList.data.tableData
    )
    const selectedSubCategory = useAppSelector(
        (state:any) => state.shopSubCategoryList.data.selectedSubCategory
    )

    const onDialogClose = () => {
        dispatch(toggleDeleteConfirmation(false))
    }

    const onDelete = async () => {
        dispatch(toggleDeleteConfirmation(false))
        const data = {id: selectedSubCategory}
        const success = await deleteSubCategory(data)

        if (success && id) {
            const payload = {
                data: tableData,
                params: id
            }
            dispatch(getSubCategory(payload))
            toast.push(
                <Notification
                    title={'Successfuly Deleted'}
                    type="success"
                    duration={2500}
                >
                    Product successfuly deleted
                </Notification>,
                {
                    placement: 'top-center',
                }
            )
        }
    }
    return (
        <ConfirmDialog
            isOpen={dialogOpen}
            type="danger"
            title="Delete SubCategory"
            confirmButtonColor="red-600"
            onClose={onDialogClose}
            onRequestClose={onDialogClose}
            onCancel={onDialogClose}
            onConfirm={onDelete}
        >
            <p>
                Are you sure you want to delete this SubCategory? All record related
                to this SubCateogry will be deleted as well. This action cannot be
                undone.
            </p>
        </ConfirmDialog>
    )
}