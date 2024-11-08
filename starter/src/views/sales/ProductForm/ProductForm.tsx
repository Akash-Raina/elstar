import { Button, FormContainer, hooks } from "@/components/ui"
import { Form, Formik, FormikProps } from "formik"
import BasicInformationFields from "./BasicInformationFields"
import { PricingFields } from "./PricingFields"
import { OrganizationFields } from "./OrganizationFields"
import * as Yup from "yup"
import { forwardRef, useState } from "react"
import { ConfirmDialog, StickyFooter } from "@/components/shared"
import { HiOutlineTrash } from "react-icons/hi"
import { AiOutlineSave } from 'react-icons/ai'
import cloneDeep from "lodash/cloneDeep"
import  {ProductImages}  from "./ProductImages"



// eslint-disable-next-line  @typescript-eslint/no-explicit-any
type FormikRef = FormikProps<any>

type InitialData = {
    product_id?: string
    product_name?: string
    code?: string
    img?: File
    url?: string
    imgList?:{
        id: string
        name: string
        img: File
        url: string
    }[]
    categories?: string
    price?: number
    sku?: number
    status?: number
    costPerItem?: number
    bulk_dp?: number
    taxrate?: number
    tags?: string[]
    brand?: string
    vendor?: string
    description?: string
}

export type FormModel = Omit<InitialData, 'tags'> & {
    tags: { label: string; value: string }[] | string[]
}

export type SetSubmitting = (isSubmitting: boolean) => void

export type OnDeleteCallback = React.Dispatch<React.SetStateAction<boolean>>

type OnDelete = (Callback: OnDeleteCallback) => void

type ProductForm = {
    initialData?: InitialData
    type: 'edit' | 'new'
    onDiscard?: () => void
    onDelete?: OnDelete
    onFormSubmit: (formData: FormModel, setSubmitting: SetSubmitting) => void
}

const { useUniqueId } = hooks

const validationSchema = Yup.object().shape({
    product_name: Yup.string().required('Product Name Required'),  
    code: Yup.string().required('Product Code Required'),
    sku: Yup.number().min(1, "quantity should be more than 0"),
    price: Yup.number().min(1, "price should be more than 0"),
    bulk_dp: Yup.number().min(1, "discount should be more than 0"),
    categories: Yup.string().required('Category Required'), 
    brand: Yup.string().required('Product brand Required'),
    vendor: Yup.string().required('Product vendor Required'),
})

const DeleteProductButton = ({ onDelete }: { onDelete: OnDelete }) => {
    const [dialogOpen, setDialogOpen] = useState(false)

    const onConfirmDialogOpen = () => {
        setDialogOpen(true)
    }

    const onConfirmDialogClose = () => {
        setDialogOpen(false)
    }

    const handleConfirm = () => {
        onDelete?.(setDialogOpen)
    }

    return (
        <>
            <Button
                className="text-red-600"
                variant="plain"
                size="sm"
                icon={<HiOutlineTrash />}
                type="button"
                onClick={onConfirmDialogOpen}
            >
                Delete
            </Button>
            <ConfirmDialog
                isOpen={dialogOpen}
                type="danger"
                title="Delete product"
                confirmButtonColor="red-600"
                onClose={onConfirmDialogClose}
                onRequestClose={onConfirmDialogClose}
                onCancel={onConfirmDialogClose}
                onConfirm={handleConfirm}
            >
                <p>
                    Are you sure you want to delete this product? All record
                    related to this product will be deleted as well. This action
                    cannot be undone.
                </p>
            </ConfirmDialog>
        </>
    )
}


  

export const ProductForm = forwardRef<FormikRef, ProductForm>((props, ref) => {

    const {
        type,
        initialData = {
            product_id: '',
            product_name: '',
            code: '',
            img: {},
            url: '',
            imgList: [], 
            categories: '',
            price: 0,
            sku: 0,
            status: 0,
            costPerItem: 0,
            bulk_dp: 0,
            taxRate: 6,
            tags: [],
            brand: '',
            vendor: '',
            description: '',
        },
        onFormSubmit,
        onDiscard,
        onDelete
    } = props  

    const newId = useUniqueId('product-')
    return(
        <>
            <Formik
                innerRef={ref}
                initialValues={{
                    ...initialData,
                    tags: initialData.tags
                }}
                validationSchema={validationSchema}
                onSubmit={(values: FormModel, { setSubmitting }) => {
                    const formData = cloneDeep(values)
                    console.log(formData)
                    formData.tags = formData.tags.map((tag) => {
                        if (typeof tag !== 'string') {
                            return tag.value
                        }
                        return tag
                    })
                    if (type === 'new') {
                        formData.product_id = newId
                        if(formData.imgList && formData.imgList.length > 0){
                            console.log(formData.imgList[0].img)
                            formData.img = formData.imgList[0].img
                            formData.url = formData.imgList[0].url
                        }
                    }
                    onFormSubmit?.(formData, setSubmitting)
                }}
            >
                {({ values, touched, errors, isSubmitting }) => (
                    <Form>
                        <FormContainer>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                                <div className="lg:col-span-2">
                                    <BasicInformationFields touched={touched} errors={errors} />
                                    <PricingFields touched={touched} errors={errors} />
                                    <OrganizationFields touched={touched} errors={errors} values={values} />
                                </div>
                                <div className="lg:col-span-1">
                                    <ProductImages values={values}/>
                                </div>
                            </div>
                            <StickyFooter
                                className="-mx-8 px-8 flex items-center justify-between py-4"
                                stickyClass="border-t bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                            >
                                <div>
                                    {type === 'edit' && (
                                        <DeleteProductButton
                                            onDelete={onDelete as OnDelete}
                                        />
                                    )}
                                </div>
                                <div className="md:flex items-center">
                                    <Button
                                        size="sm"
                                        className="ltr:mr-3 rtl:ml-3"
                                        type="button"
                                        onClick={() => onDiscard?.()}
                                    >
                                        Discard
                                    </Button>
                                    <Button
                                        size="sm"
                                        loading={isSubmitting}
                                        icon={<AiOutlineSave />}
                                        variant="solid"
                                        type="submit"
                                    >
                                        Save
                                    </Button>
                                </div>
                            </StickyFooter>
                        </FormContainer>
                    </Form>
                )}
            </Formik>
        </>
    )
})

ProductForm.displayName = 'ProductForm'
