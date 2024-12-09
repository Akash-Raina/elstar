
import { getCategory, toggleDeleteConfirmation, useAppDispatch, useAppSelector } from "../store"
import { toast, Notification } from "@/components/ui"
import { deleteCategory } from "../../CategoryEdit/store"
import ConfirmDialog from "@/components/shared/ConfirmDialog"


export const CategoryDeleteConfirmation = ()=>{
    const dispatch = useAppDispatch()
    const dialogOpen = useAppSelector(
        (state) => state.shopCategoryList.data.deleteConfirmation
    )
    const tableData = useAppSelector(
        (state) => state.shopCategoryList.data.tableData
    )
    const selectedCategory = useAppSelector(
        (state) => state.shopCategoryList.data.selectedCategory
    )

    const onDialogClose = () => {
        dispatch(toggleDeleteConfirmation(false))
    }

    const onDelete = async () => {
        dispatch(toggleDeleteConfirmation(false))
        const data = {id: selectedCategory}
        const success = await deleteCategory(data)

        if (success) {
            dispatch(getCategory(tableData))
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
            title="Delete product"
            confirmButtonColor="red-600"
            onClose={onDialogClose}
            onRequestClose={onDialogClose}
            onCancel={onDialogClose}
            onConfirm={onDelete}
        >
            <p>
                Are you sure you want to delete this product? All record related
                to this product will be deleted as well. This action cannot be
                undone.
            </p>
        </ConfirmDialog>
    )
}