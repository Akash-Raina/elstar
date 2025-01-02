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
    code: number
    location_category: string
    location_type: string
    location_desc: string
    rout_throw_item: number
    revenue_center: string
    asset_life: string
    salvage_value: string
    depreciation_provision_gl:string
    accumulated_deprecation_gl:string
    accumulated_deprecation_account:string
    capitalization_gl:string
}

export type LocationFormModel = InitialData

export type LocationSetSubmitting = (isSubmitting: boolean) => void

export type OnDeleteCallback = React.Dispatch<React.SetStateAction<boolean>>


type OnDelete = (Callback: OnDeleteCallback) => void

type LocationForm = {
    initialData?: InitialData
    type: 'edit' | 'new'
    onDiscard ?: ()=>void
    onDelete ?: OnDelete
    onFormSubmit: (FormData: InitialData, setSubmitting: LocationSetSubmitting) => void
}

const validationSchema = Yup.object().shape({
    district_code: Yup.number().required('Country Code required'),
    district_name: Yup.string().required('Country Name required'),
    state: Yup.string().required('Country Name required')
})

export const LocationForm = forwardRef<FormikRef, LocationForm>((props, ref)=>{

    const {
        type, 
        initialData = {
            code: "",
            location_category: "",
            location_type: "",
            location_desc: "",
            rout_throw_item: "",
            revenue_center: "",
            asset_life: "",
            salvage_value: "",
            depreciation_provision_gl:"",
            accumulated_deprecation_gl:"",
            accumulated_deprecation_account:"",
            capitalization_gl:""
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
            onSubmit={(values:LocationFormModel, {setSubmitting})=>{
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

LocationForm.displayName = 'LocationForm'