import AdaptableCard from "@/components/shared/AdaptableCard"
import { FormItem, Input, Select } from "@/components/ui"
import { Field, FieldProps, FormikErrors, FormikTouched } from "formik";

type FormFieldsName = {
    child_of: string
    address: string
    details: string
}

type BasicInformationFields = {
    touched: FormikTouched<FormFieldsName>
    errors: FormikErrors<FormFieldsName>
}
export const EmployeeDetails = (props: BasicInformationFields)=>{
    const {touched, errors} = props

    return <>
        <AdaptableCard divider className="mb-4">
            <h3 className="mb-8">Employee Details</h3>
            <div className="grid grid-cols-1"> 
                <div className="grid-col-1 flex gap-2">
                    <div className="w-[525px]">  
                        <FormItem
                            label = "Son/Daughter/ Wife of"
                            invalid = {(errors.child_of && touched.child_of)}
                            errorMessage={errors.child_of}
                        >
                            <Field
                                type = "text"
                                name = "child_of"
                                placeholder = ""
                                component = {Input}
                            />
                        </FormItem>
                    </div>
                    <div className="flex gap-3 font-semibold items-center ml-5">
                        <input type="checkbox" />
                        <label>Allow to modify grade salary</label>
                    </div>
                </div>
                <div className="grid-col-1 flex gap-2">                
                    <div className="w-[525px]">
                        <FormItem
                            label = "Address"
                            invalid = {(errors.address && touched.address)}
                            errorMessage={errors.address}
                        >
                        <Field
                            type = "text"
                            name = "address"
                            placeholder = ""
                            component = {Input}
                        />
                        </FormItem>
                    </div>
                    <div className="ml-[28px] w-60">
                        <FormItem
                            label = "Details"
                            invalid = {(errors.details && touched.details)}
                            errorMessage={errors.details}
                        >
                        <Field
                            type = "text"
                            name = "details"
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