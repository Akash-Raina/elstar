import { ConfirmDialog } from "@/components/shared"
import { deleteProduct, getList, toggleDeleteConfirmation, useAppDispatch, useAppSelector } from "../store"
import { Notification, toast } from "@/components/ui"
import { useParams } from "react-router-dom"

export const ProductDeleteConfirmation = ()=>{

    const {id} = useParams();
    console.log("product id", id)
    const dispatch = useAppDispatch()
    const dialogOpen = useAppSelector(
        (state) => state.shopProductList.data.deleteConfirmation
    )
    const selectedProduct = useAppSelector(
        (state) => state.shopProductList.data.selectedProduct
    )
    const tableData = useAppSelector(
        (state) => state.shopProductList.data.tableData
    )

    const onDialogClose = () => {
        dispatch(toggleDeleteConfirmation(false))
    }
    
    const onDelete = async () => {
        dispatch(toggleDeleteConfirmation(false))
        const data = {product_id: selectedProduct}
        const success = await deleteProduct(data)

        if (success && id) {
            const payload = {
                data: tableData,
                params: id
            }
            dispatch(getList(payload))
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