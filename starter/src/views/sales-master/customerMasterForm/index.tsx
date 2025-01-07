import { Formik, FormikProps, Form } from "formik"
import { FormContainer } from "@/components/ui/Form";
import { forwardRef, useState } from "react"
import * as Yup from "yup"
import cloneDeep from "lodash/cloneDeep";
import { ConfirmDialog, StickyFooter } from "@/components/shared";
import { Button } from "@/components/ui";
import { AiOutlineSave } from "react-icons/ai";
import { HiOutlineTrash } from "react-icons/hi";
import BasicInformationFields from "./component/BasicInformationFields";


type FormikRef = FormikProps<any>

type InitialData = {
    customer_code: string
    select_member: string
    ecommerce_operater: number
    customer_name: string
    legal_name: string
    sugar_license_number: string
}

export type CustomerFormModel = InitialData

export type CustomerSetSubmitting = (isSubmitting: boolean) => void

export type OnDeleteCallback = React.Dispatch<React.SetStateAction<boolean>>


type OnDelete = (Callback: OnDeleteCallback) => void

type MainForm = {
    initialData?: InitialData
    type: 'edit' | 'new'
    onDiscard ?: ()=>void
    onDelete ?: OnDelete
    onFormSubmit: (FormData: InitialData, setSubmitting: CustomerSetSubmitting) => void
}

const validationSchema = Yup.object().shape({
    
})

export const CustomerMasterForm = forwardRef<FormikRef, MainForm>((props, ref)=>{

    const {
        type, 
        initialData = {
            customer_code: '',
            select_member: '',
            ecommerce_operater: '',
            customer_name: '',
            legal_name: '',
            sugar_license_number: ''
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
            onSubmit={(values: CustomerFormModel, {setSubmitting})=>{
                const formData = cloneDeep(values)
                onFormSubmit?.(formData, setSubmitting)
            }}
        >
            {({values, touched, errors, isSubmitting}) => (
                    <Form>
                        <FormContainer>
                        <div className="grid grid-cols-1 gap-4">
                                <div className="lg:col-span-1">
                                    <BasicInformationFields touched={touched} errors={errors}/>
                                </div>
                        </div>
                            <div
                                className="-mx-8 px-8 flex justify-end py-4"
                            >
                                <div className="md:flex items-center flex gap-3">
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

CustomerMasterForm.displayName = 'CustomerMasterForm'