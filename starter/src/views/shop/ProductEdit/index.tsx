import { injectReducer, useAppDispatch, useAppSelector } from "@/store"
import reducer, { getProduct, updateProduct } from "./store"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react"
import DoubleSidedImage from "@/components/shared/DoubleSidedImage"
import Loading from "@/components/shared/Loading"
import ProductForm, { FormModel, OnDeleteCallback, SetSubmitting } from "../ProductForm"
import isEmpty from "lodash/isEmpty"
import toast from "@/components/ui/toast"
import Notification from '@/components/ui/Notification'

injectReducer('shopProductEdit', reducer)

const ProductEdit = ()=>{
    const {id}  = useParams();
    const location = useLocation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const productData = useAppSelector(
        (state:any) => state.shopProductEdit.data.productData
    )

    const loading = useAppSelector(
        (state:any) => state.shopProductEdit.data.loading
    )

    const fetchData = (data:{id:string}) => {
        dispatch(getProduct(data))
    }

    const handleDiscard = () => {
        navigate('/productlist/2')
    }

    const handleFormSubmit = async(
        values:  FormModel,
        setSubmitting: SetSubmitting
    ) =>{
        setSubmitting(true);
        const productData = {
            ...values,
            id: id
        };

        const success = await updateProduct(productData);
        setSubmitting(false);

        if(success){
            popNotification('updated');
        }

    }

    const handleDelete = async (setDialogOpen: OnDeleteCallback) => {
        // setDialogOpen(false)
        // const success = await deleteProduct({
        //     product_id: productData.product_id,
        // })
            popNotification('deleted')

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
        navigate('productlist/2')
    }
    useEffect(() => {
        const path = location.pathname.substring(
            location.pathname.lastIndexOf('/') + 1
        )
        const rquestParam = { id: path }
        fetchData(rquestParam)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.pathname])

    return         <>
    <Loading loading={loading}>
        {!isEmpty(productData) && (
            <>
                <ProductForm
                    type="edit"
                    initialData={productData}
                    onFormSubmit={handleFormSubmit}
                    onDiscard={handleDiscard}
                />
            </>
        )}
    </Loading>
    {!loading && isEmpty(productData) && (
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

export default ProductEdit