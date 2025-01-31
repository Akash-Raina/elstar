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
    code: string
    short_name: string
    leave_type_dev: string
    leave_type: string
    bal_carry_forward_to_next_year: string
    paid_leave: string
    min_number_of_days: string
    max_number_of_days: string
    check_balance: string
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

export const LeaveTypeForm = forwardRef<FormikRef, MainForm>((props, ref)=>{

    const {
        type, 
        initialData = {
            code: '',
            short_name: '',
            leave_type_dev: '',
            leave_type: '',
            bal_carry_forward_to_next_year: '',
            paid_leave: '',
            min_number_of_days: '',
            max_number_of_days: '',
            check_balance: ''
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

LeaveTypeForm.displayName = 'LeaveTypeForm'