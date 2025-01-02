import { Formik, FormikProps, Form } from "formik"
import { FormContainer } from "@/components/ui/Form";
import { forwardRef, useState } from "react"
import * as Yup from "yup"
import cloneDeep from "lodash/cloneDeep";
import { ConfirmDialog, StickyFooter } from "@/components/shared";
import { Button } from "@/components/ui";
import { AiOutlineSave } from "react-icons/ai";
import { HiOutlineTrash } from "react-icons/hi";
import BasicInformationFields from "./components/BasicInformationFields";


type FormikRef = FormikProps<any>

type InitialData = {
    number: number
    member_type: string
    type:string
    order_no: number
    sales_type: string
    release_order_type: string
    description: string
}

export type DeliveryFormModel = InitialData

export type DeliverySetSubmitting = (isSubmitting: boolean) => void

export type OnDeleteCallback = React.Dispatch<React.SetStateAction<boolean>>


type OnDelete = (Callback: OnDeleteCallback) => void

type DeliveryForm = {
    initialData?: InitialData
    type: 'edit' | 'new'
    onDiscard ?: ()=>void
    onDelete ?: OnDelete
    onFormSubmit: (FormData: InitialData, setSubmitting: DeliverySetSubmitting) => void
}

const validationSchema = Yup.object().shape({
    number: Yup.number().required(' Code required'),
    member_type: Yup.string().required(' Name required'),
    type: Yup.string().required(' Name required'),
    order_no: Yup.number().required(' Name required'),
    sales_type: Yup.string().required(' Name required'),
    release_order_type: Yup.string().required(' Name required'),
    description: Yup.string().required(' Name required'),
})

export const DeliveryChallanForm = forwardRef<FormikRef, DeliveryForm>((props, ref)=>{

    const {
        type, 
        initialData = {
            number: '',
            member_type: '',
            type: '',
            order_no: '',
            sales_type: '',
            release_order_type: '',
            description: ''
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
            onSubmit={(values:DeliveryFormModel, {setSubmitting})=>{
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
                                </div>
                        </div>
                            <div
                                className="-mx-8 px-8 flex justify-end py-4"
                            >
                                <div className="md:flex items-center mt-36 flex gap-3">
                                    <Button 
                                        size="sm"
                                        onClick={onDiscard}
                                    >
                                        Discard
                                    </Button>
                                    <Button
                                        size="sm"
                                        loading={isSubmitting}
                                        icon={<AiOutlineSave />}
                                        variant="solid"
                                        color="red"
                                        type="submit"
                                    >
                                        Save
                                    </Button>
                                    
                                </div>
                            </div>
                        </FormContainer>
                    </Form>
                )}
        </Formik>
    </>
})

DeliveryChallanForm.displayName = 'DeliveryChallanForm'