import { Formik, FormikProps, Form } from "formik"
import { FormContainer } from "@/components/ui/Form";
import { forwardRef } from "react"
import * as Yup from "yup"
import cloneDeep from "lodash/cloneDeep";
import { Button } from "@/components/ui";
import { AiOutlineSave } from "react-icons/ai";
import BasicInformationFields from "./components/BasicInformationFields";



type FormikRef = FormikProps<any>

type InitialData = {
    leave_month: string
    limit_of_pf: string
    weekly_off: string
    leave_encash_app: string
    leave_encashment_days: string
    tds_circle: string
    retire_age: string
    assessment_year: string
    manager_payroll: string
    designation:string
    suspended_salary: number
    code_no: number
    group_no: number
    applicant_kyc_path: string
}

export type LocalFormModel = InitialData

export type LocalSetSubmitting = (isSubmitting: boolean) => void

export type OnDeleteCallback = React.Dispatch<React.SetStateAction<boolean>>


type OnDelete = (Callback: OnDeleteCallback) => void

type MainForm = {
    initialData?: InitialData
    type: 'edit' | 'new'
    onDiscard ?: ()=>void
    onDelete ?: OnDelete
    onFormSubmit: (FormData: InitialData, setSubmitting: LocalSetSubmitting) => void
}

const validationSchema = Yup.object().shape({
    
})

export const SystemSettingForm = forwardRef<FormikRef, MainForm>((props, ref)=>{

    const {
        type, 
        initialData = {
            leave_month: '',
            limit_of_pf: '',
            weekly_off: '',
            leave_encash_app: '',
            leave_encashment_days: '',
            tds_circle: '',
            retire_age: '',
            assessment_year: '',
            manager_payroll: '',
            designation:'',
            suspended_salary: '',
            code_no: '',
            group_no: '',
            applicant_kyc_path: '',
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
            onSubmit={(values:LocalFormModel, {setSubmitting})=>{
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

SystemSettingForm.displayName = 'SystemSettingForm'