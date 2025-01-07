import { Formik, FormikProps, Form } from "formik"
import { FormContainer } from "@/components/ui/Form";
import { forwardRef, useState } from "react"
import * as Yup from "yup"
import cloneDeep from "lodash/cloneDeep";
import { ConfirmDialog, StickyFooter } from "@/components/shared";
import { Button } from "@/components/ui";
import { AiOutlineSave } from "react-icons/ai";
import { HiOutlineTrash } from "react-icons/hi";
import BasicInformation from "./components/BasicInformation";


type FormikRef = FormikProps<any>

type InitialData = {
    bank_name: string
    branch_name: string
    ifsc_code: string
    beneficiary_name: string
    account_no: number
}

export type SalesFormModel = InitialData

export type SalesSetSubmitting = (isSubmitting: boolean) => void

export type OnDeleteCallback = React.Dispatch<React.SetStateAction<boolean>>


type OnDelete = (Callback: OnDeleteCallback) => void

type MainForm = {
    initialData?: InitialData
    type: 'edit' | 'new'
    onDiscard ?: ()=>void
    onDelete ?: OnDelete
    onFormSubmit: (FormData: InitialData, setSubmitting: SalesSetSubmitting) => void
}

const validationSchema = Yup.object().shape({
    
})

export const SalesInvoiceForm = forwardRef<FormikRef, MainForm>((props, ref)=>{

    const {
        type, 
        initialData = {
            supplier_code: '',
            supplier_name: '',
            type: '',
            trade_name: '',
            sub_type: '',
            legal_name: '',
            rd_urd: '',
            ecommerce_operator: '',
            document_type: '',
            image:[]
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
            onSubmit={(values:SalesFormModel, {setSubmitting})=>{
                const formData = cloneDeep(values)
                onFormSubmit?.(formData, setSubmitting)
            }}
        >
            {({values, touched, errors, isSubmitting}) => (
                    <Form>
                        <FormContainer>
                        <div className="grid grid-cols-1 gap-4">
                                <div className="lg:col-span-1">
                                    <h3 className="mb-8">Sales Invoice Bank Details </h3>
                                    <BasicInformation touched={touched} errors={errors} type={"1"} />
                                    <div className=" flex gap-2 mb-2">
                                        <input type="checkbox"  className="w-[27px] h-[23px]"/>
                                        <label className="text-lg font-semibold text-black">Alternate Bank</label>
                                    </div>
                                    <BasicInformation touched={touched} errors={errors} type={"2"} />
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

SalesInvoiceForm.displayName = 'SalesInvoiceForm'