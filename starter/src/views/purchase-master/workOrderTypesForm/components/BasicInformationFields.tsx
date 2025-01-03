import AdaptableCard from "@/components/shared/AdaptableCard"
import { FormItem, Input } from "@/components/ui"
import { Field, FormikErrors, FormikTouched } from "formik"

type FormFieldsName = {
    work_requisition_code: number
    work_requisition_name: string
    work_requisition_type: string
}

type BasicInformationFields = {
    touched: FormikTouched<FormFieldsName>
    errors: FormikErrors<FormFieldsName>
}

const BasicInformationFields = (props: BasicInformationFields)=>{
    const {touched, errors} = props

    return <>
        <AdaptableCard divider className="mb-4">
            <h3 className="mb-8">Add Work order types  </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16"> 
                <div className="col-span-1">  
                    <FormItem
                    label = "Work requisition code"
                    invalid = {(errors.work_requisition_code && touched.work_requisition_code)}
                    errorMessage={errors.work_requisition_code}
                    >
                        <Field
                            type = "text"
                            name = "work_requisition_code"
                            placeholder = ""
                            component = {Input}
                        />
                    </FormItem>
                </div>
                <div className="col-span-1">
                    <FormItem
                        label = "Work requisition name"
                        invalid = {(errors.work_requisition_name && touched.work_requisition_name)}
                        errorMessage={errors.work_requisition_name}
                    >
                    <Field
                        type = "text"
                        name = "work_requisition_name"
                        placeholder = ""
                        component = {Input}
                    />
                    </FormItem>
                </div>
                <div className="col-span-1">
                    <FormItem
                        label = "work requisition type"
                        invalid = {(errors.work_requisition_type && touched.work_requisition_type)}
                        errorMessage={errors.work_requisition_type}
                    >
                    <Field
                        type = "text"
                        name = "work_requisition_type"
                        placeholder = ""
                        component = {Input}
                    />
                    </FormItem>
                </div>
            </div>
        </AdaptableCard>
    </>
}

export default BasicInformationFields