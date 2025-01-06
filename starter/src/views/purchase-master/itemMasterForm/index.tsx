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
    sub_group: number
    bin_card_no: number
    item_name: string
    extra_desc: string
    storing_unit: number
    ordering_unit: string
    conversing_factor: string
    storing_location: string
    opening_balance:string
    weight:string
    used_for:string
    maintain_sr_no:number
    prefix: string
}

export type SupplierFormModel = InitialData

export type SupplierSetSubmitting = (isSubmitting: boolean) => void

export type OnDeleteCallback = React.Dispatch<React.SetStateAction<boolean>>


type OnDelete = (Callback: OnDeleteCallback) => void

type MainForm = {
    initialData?: InitialData
    type: 'edit' | 'new'
    onDiscard ?: ()=>void
    onDelete ?: OnDelete
    onFormSubmit: (FormData: InitialData, setSubmitting: SupplierSetSubmitting) => void
}

const validationSchema = Yup.object().shape({
    supplier_code: Yup.number().required('Supplier Code required')
})

export const ItemMasterForm = forwardRef<FormikRef, MainForm>((props, ref)=>{

    const {
        type, 
        initialData = {
            sub_group: "",
            bin_card_no: "",
            item_name: "",
            extra_desc: "",
            storing_unit: "",
            ordering_unit: "",
            conversing_factor: "",
            storing_location: "",
            opening_balance:"",
            weight:"",
            used_for: "",
            maintain_sr_no:"",
            prefix: ""
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
            onSubmit={(values:SupplierFormModel, {setSubmitting})=>{
                const formData = cloneDeep(values)
                onFormSubmit?.(formData, setSubmitting)
            }}
        >
            {({values, touched, errors, isSubmitting}) => (
                    <Form>
                        <FormContainer>
                        <div className="grid grid-cols-1 gap-4">
                                <div className="lg:col-span-1">
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

ItemMasterForm.displayName = 'ItemMasterForm'