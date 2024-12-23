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
    state_code: string
    state_name: string
    state_code_gst: string
    country_name: string
}

export type StateFormModel = InitialData

export type StateSetSubmitting = (isSubmitting: boolean) => void

export type OnDeleteCallback = React.Dispatch<React.SetStateAction<boolean>>


type OnDelete = (Callback: OnDeleteCallback) => void

type StateForm = {
    initialData?: InitialData
    type: 'edit' | 'new'
    onDiscard ?: ()=>void
    onDelete ?: OnDelete
    onFormSubmit: (FormData: InitialData, setSubmitting: StateSetSubmitting) => void
}

const validationSchema = Yup.object().shape({
    state_code: Yup.number().required('State Code required'),
    state_name: Yup.string().required('State Name required'),
    state_code_gst: Yup.number().required('State Code required'),
    country_name: Yup.string().required('State Name required')
})

export const StateFrom = forwardRef<FormikRef, StateForm>((props, ref)=>{

    const {
        type, 
        initialData = {
            state_code: '',
            state_name: '',
            state_code_gst: '',
            country_name: ''
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

StateFrom.displayName = 'StateForm'