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
    terms_code: number
    document_no: string
    description: string
    default_value: string
    printing_index: string
}

export type TermsFormModel = InitialData

export type TermsSetSubmitting = (isSubmitting: boolean) => void

export type OnDeleteCallback = React.Dispatch<React.SetStateAction<boolean>>


type OnDelete = (Callback: OnDeleteCallback) => void

type TermsForm = {
    initialData?: InitialData
    type: 'edit' | 'new'
    onDiscard ?: ()=>void
    onDelete ?: OnDelete
    onFormSubmit: (FormData: InitialData, setSubmitting: TermsSetSubmitting) => void
}

const validationSchema = Yup.object().shape({
    terms_code: Yup.number().required('State Code required'),
    document_no: Yup.string().required('State Name required'),
    descprition: Yup.number().required('State Code required'),
    default_value: Yup.string().required('State Name required'),
    printing_index: Yup.string().required('State Name required')
})

export const TermsFrom = forwardRef<FormikRef, TermsForm>((props, ref)=>{

    const {
        type, 
        initialData = {
            terms_code: '',
            document_no: '',
            description: '',
            default_value: '',
            printing_index: ''
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
            onSubmit={(values:TermsFormModel, {setSubmitting})=>{
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

TermsFrom.displayName = 'TermsForm'