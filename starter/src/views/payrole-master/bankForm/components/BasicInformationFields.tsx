import AdaptableCard from "@/components/shared/AdaptableCard"
import { FormItem, Input } from "@/components/ui"
import { Field, FormikErrors, FormikTouched } from "formik";

type FormFieldsName = {
    branch_code: number
    branch_name: string
}

type BasicInformationFields = {
    touched: FormikTouched<FormFieldsName>
    errors: FormikErrors<FormFieldsName>
}


const BasicInformationFields = (props: BasicInformationFields)=>{
    const {touched, errors} = props

    return <>
        <AdaptableCard divider className="mb-4">
            <h3 className="mb-8">Add Bank Branch Master</h3>
            <div className="grid grid-cols-1"> 
                <div className="grid-col-1 flex gap-2">
                    <div className="w-60">  
                        <FormItem
                        label = "Branch Code"
                        invalid = {(errors.branch_code && touched.branch_code)}
                        errorMessage={errors.branch_code}
                        >
                            <Field
                                type = "text"
                                name = "branch_code"
                                placeholder = ""
                                component = {Input}
                            />
                        </FormItem>
                    </div>
                </div>
                <div className="grid-col-1 flex gap-2">              
                <div className="w-[525px]">
                        <FormItem
                            label = "Branch Name"
                            invalid = {(errors.branch_name && touched.branch_name)}
                            errorMessage={errors.branch_name}
                        >
                        <Field
                            type = "text"
                            name = "branch_name"
                            placeholder = ""
                            component = {Input}
                        />
                        </FormItem>
                    </div>
                </div>
            </div>
        </AdaptableCard>
    </>
}

export default BasicInformationFields