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
    country_code: string
    country_name: string
}

export type CountryFormModel = InitialData

export type CountrySetSubmitting = (isSubmitting: boolean) => void

export type OnDeleteCallback = React.Dispatch<React.SetStateAction<boolean>>


type OnDelete = (Callback: OnDeleteCallback) => void

type CountryForm = {
    initialData?: InitialData
    type: 'edit' | 'new'
    onDiscard ?: ()=>void
    onDelete ?: OnDelete
    onFormSubmit: (FormData: InitialData, setSubmitting: CountrySetSubmitting) => void
}

const validationSchema = Yup.object().shape({
    country_code: Yup.number().required('Country Code required'),
    country_name: Yup.string().required('Country Name required')
})

export const CountryForm = forwardRef<FormikRef, CountryForm>((props, ref)=>{

    const {
        type, 
        initialData = {
            country_code: '',
            country_name: '',
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
            onSubmit={(values:CountryFormModel, {setSubmitting})=>{
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
                            <StickyFooter
                                className="-mx-8 px-8 flex justify-end py-4"
                                stickyClass="border-t bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
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
                            </StickyFooter>
                        </FormContainer>
                    </Form>
                )}
        </Formik>
    </>
})

CountryForm.displayName = 'CountryForm'