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
import { ProcurememtDetails } from "./components/ProcurementDetails";
import { OtherDetails } from "./components/OtherDetails";


type FormikRef = FormikProps<any>

type InitialData = {
    product_type: string
    code: string
    item_name: string
    description: string
    storing_unit: string
    ordering_unit:string
    conversing_factor:string
    storing_location:string
    weight:string
    weight_unit: string
    unit: string
    hsn_code:string
    godown:string
    opening_balance:string
}

export type GoDownFormModel = InitialData

export type GoDownSetSubmitting = (isSubmitting: boolean) => void

export type OnDeleteCallback = React.Dispatch<React.SetStateAction<boolean>>


type OnDelete = (Callback: OnDeleteCallback) => void

type GoDownForm = {
    initialData?: InitialData
    type: 'edit' | 'new'
    onDiscard ?: ()=>void
    onDelete ?: OnDelete
    onFormSubmit: (FormData: InitialData, setSubmitting: GoDownSetSubmitting) => void
}

const validationSchema = Yup.object().shape({

})

export const ItemForm = forwardRef<FormikRef, GoDownForm>((props, ref)=>{

    const {
        type, 
        initialData = {
            product_type: '',
            code: '',
            item_name:'',
            description: '',
            storing_unit: '',
            ordering_unit:'',
            conversing_factor:'',
            storing_location:'',
            weight:'',
            weight_unit: '',
            unit: '',
            hsn_code:'',
            godown:'',
            opening_balance:''
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
            onSubmit={(values:GoDownFormModel, {setSubmitting})=>{
                const formData = cloneDeep(values)
                onFormSubmit?.(formData, setSubmitting)
            }}
        >
            {({values, touched, errors, isSubmitting}) => (
                    <Form>
                        <FormContainer>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                                <div className="lg:col-span-3">
                                    <BasicInformationFields touched={touched} errors={errors} />
                                    <div className="flex gap-7">
                                        <ProcurememtDetails touched={touched} errors={errors}/>
                                        <OtherDetails touched={touched} errors={errors}/>
                                    </div>
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

ItemForm.displayName = 'ItemForm'