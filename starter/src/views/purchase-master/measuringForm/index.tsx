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
    unit_code: number
    unit_name: string
}

export type UnitFormModel = InitialData

export type UnitSetSubmitting = (isSubmitting: boolean) => void

export type OnDeleteCallback = React.Dispatch<React.SetStateAction<boolean>>


type OnDelete = (Callback: OnDeleteCallback) => void

type UnitForm = {
    initialData?: InitialData
    type: 'edit' | 'new'
    onDiscard ?: ()=>void
    onDelete ?: OnDelete
    onFormSubmit: (FormData: InitialData, setSubmitting: UnitSetSubmitting) => void
}

const validationSchema = Yup.object().shape({
    unit_code: Yup.number().required(' Code required'),
    unit_name: Yup.string().required(' Name required'),
})

export const UnitForm = forwardRef<FormikRef, UnitForm>((props, ref)=>{

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
            onSubmit={(values:UnitFormModel, {setSubmitting})=>{
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
                                <div className="md:flex items-center mt-28">
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

UnitForm.displayName = 'UnitForm'