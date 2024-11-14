import DoubleSidedImage from '@/components/shared/DoubleSidedImage'
import reducer, {
    getProduct,
    deleteProduct,
    useAppDispatch,
    useAppSelector,
    updateProduct,
    getImageUrl,
} from './store'
import Loading from '@/components/shared/Loading'
import isEmpty from 'lodash/isEmpty'
import ProductForm, {
    FormModel,
    OnDeleteCallback,
    SetSubmitting,
} from '@/views/sales/ProductForm'
import { useNavigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { injectReducer } from '@/store'
import { toast } from '@/components/ui'
import Notification from '@/components/ui/Notification'

injectReducer('salesProductEdit', reducer)

type ImageUrlResponse = {
    response: any
    fileUrl: string
}

export const ProductEdit = () => {
    const location = useLocation()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const productData = useAppSelector(
        (state) => state.salesProductEdit.data.productData
    )
    const loading = useAppSelector(
        (state) => state.salesProductEdit.data.loading
    )

    const fetchData = (data: { id: string }) => {
        dispatch(getProduct(data))
    }

    const handleDiscard = () => {
        navigate('/collapse-menu-product-list')
    }

    const handleFormSubmit = async (
        values: FormModel,
        setSubmitting: SetSubmitting
    ) => {
        
        setSubmitting(true);
        let productData = values;

        if(values.imgList && values.imgList[0] !== undefined){
            const {url, img} = values.imgList[0];

            if(url === null  || url.startsWith('h')){
                console.log('no image changes')
            }
            else if(url.startsWith('b')){
                const fileData = {img};

                const getUrl:ImageUrlResponse = await getImageUrl(fileData);
                productData = {...values, url: getUrl.fileUrl}
            }
        }
        else{
            productData = {...values, url: ''};
        }

        const success = await updateProduct(productData);
        setSubmitting(false);

        if(success){
            popNotification('updated');
        }
    }

    const handleDelete = async (setDialogOpen: OnDeleteCallback) => {
        setDialogOpen(false)
        const success = await deleteProduct({
            product_id: productData.product_id,
        })
        if (success) {
            popNotification('deleted')
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
        navigate('/app/sales/product-list')
    }

    useEffect(() => {
        const path = location.pathname.substring(
            location.pathname.lastIndexOf('/') + 1
        )
        const rquestParam = { id: path }
        fetchData(rquestParam)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.pathname])

    return (
        <>
            <Loading loading={loading}>
                {!isEmpty(productData) && (
                    <>
                        <ProductForm
                            type="edit"
                            initialData={productData}
                            onFormSubmit={handleFormSubmit}
                            onDiscard={handleDiscard}
                            onDelete={handleDelete}
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
    )
}
