import ConfirmDialog from "@/components/shared/ConfirmDialog"
import StickyFooter from "@/components/shared/StickyFooter";
import Button from "@/components/ui/Button"
import { FormContainer } from "@/components/ui/Form";
import { FormikProps, Formik, Form } from "formik"
import cloneDeep from "lodash/cloneDeep";
import { forwardRef, useState } from "react"
import { AiOutlineSave } from "react-icons/ai";
import { HiOutlineTrash } from "react-icons/hi"
import * as Yup from "yup"
import BasicInformationFields from "./components/BasicInformationField";
import { OrganizationFields } from "./components/OrganizationFields";

type FormikRef = FormikProps<any>

type InitialData = {
    id?: string
    sub_category_name?: string
}

export type SubCategoryFormModel = InitialData

export type SubCategorySetSubmitting = (isSubmitting: boolean) => void

export type OnDeleteCallback = React.Dispatch<React.SetStateAction<boolean>>

type OnDelete = (Callback: OnDeleteCallback) => void

type SubCategoryForm = {
    initialData?: InitialData
    type: 'edit' | 'new'
    onDiscard?: () => void
    onDelete?: OnDelete
    onFormSubmit: (formData: InitialData, setSubmitting: SubCategorySetSubmitting) => void
}

const validationSchema = Yup.object().shape({
    sub_category_name: Yup.string().required('Product Name Required'),  

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
                    Are you sure you want to delete this category? All record
                    related to this category will be deleted as well. This action
                    cannot be undone.
                </p>
            </ConfirmDialog>
        </>
    )
}

export const SubCategoryForm = forwardRef<FormikRef, SubCategoryForm>((props, ref)=>{
    const {
        type, 
        initialData = {
            id: '',
            sub_category_name: ''
        },
        onFormSubmit,
        onDiscard, 
        onDelete
    } = props

    return <>
        <Formik
            innerRef={ref}
            initialValues={initialData}
            validationSchema={validationSchema}
            onSubmit={(values:SubCategoryFormModel, {setSubmitting})=>{
                const formData = cloneDeep(values)
                onFormSubmit?.(formData, setSubmitting)
            }}
        >
            {({values, touched, errors, isSubmitting}) => (
                    <Form>
                        <FormContainer>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                                <div className="lg:col-span-2">
                                    <BasicInformationFields touched={touched} errors={errors} />
                                    <OrganizationFields touched={touched} errors={errors} values={values}/>
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
})

SubCategoryForm.displayName = 'SubCategoryForm'