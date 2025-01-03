import AdaptableCard from "@/components/shared/AdaptableCard"
import { FormItem, Input } from "@/components/ui"
import { Field, FormikErrors, FormikTouched } from "formik"

type FormFieldsName = {
    code : number
    work_type: string
    work_name: string
}

type BasicInformationFields = {
    touched: FormikTouched<FormFieldsName>
    errors: FormikErrors<FormFieldsName>
}

const BasicInformationFields = (props: BasicInformationFields)=>{
    const {touched, errors} = props

    return <>
        <AdaptableCard divider className="mb-4">
            <h3 className="mb-8">Add Work order type  </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 justify-around gap-20 w-[150%]"> 
                <div className="col-span-1">  
                    <FormItem
                    label = "Code"
                    invalid = {(errors.code && touched.code)}
                    errorMessage={errors.code}
                    >
                        <Field
                            type = "text"
                            name = "code"
                            placeholder = ""
                            component = {Input}
                        />
                    </FormItem>
                </div>
                <div className="col-span-1">
                    <FormItem
                        label = "Work Type"
                        invalid = {(errors.work_type && touched.work_type)}
                        errorMessage={errors.work_type}
                    >
                    <Field
                        type = "text"
                        name = "work_type"
                        placeholder = ""
                        component = {Input}
                    />
                    </FormItem>
                </div>
                <div className="col-span-1">
                    <FormItem
                        label = "Work name"
                        invalid = {(errors.work_name && touched.work_name)}
                        errorMessage={errors.work_name}
                    >
                    <Field
                        type = "text"
                        name = "work_name"
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