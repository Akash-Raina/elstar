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
    order_code: string
    order_name: string
}

export type StateFormModel = InitialData

export type StateSetSubmitting = (isSubmitting: boolean) => void

export type OnDeleteCallback = React.Dispatch<React.SetStateAction<boolean>>


type OnDelete = (Callback: OnDeleteCallback) => void

type OrderForm = {
    initialData?: InitialData
    type: 'edit' | 'new'
    onDiscard ?: ()=>void
    onDelete ?: OnDelete
    onFormSubmit: (FormData: InitialData, setSubmitting: StateSetSubmitting) => void
}

const validationSchema = Yup.object().shape({
    order_code: Yup.number().required('State Code required'),
    order_name: Yup.string().required('State Name required'),
})

export const OrderForm = forwardRef<FormikRef, OrderForm>((props, ref)=>{

    const {
        type, 
        initialData = {
            order_code: '',
            order_name: '',
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
            onSubmit={(values:StateFormModel, {setSubmitting})=>{
                const formData = cloneDeep(values)
                onFormSubmit?.(formData, setSubmitting)
            }}
        >
            {({values, touched, errors, isSubmitting}) =>(
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
                            <div className="md:flex items-center mt-8">
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

OrderForm.displayName = 'OrderForm'