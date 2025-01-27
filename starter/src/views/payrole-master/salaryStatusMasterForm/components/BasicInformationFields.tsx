import AdaptableCard from "@/components/shared/AdaptableCard"
import { FormItem, Input, Select } from "@/components/ui"
import { Field, FieldProps, FormikErrors, FormikTouched } from "formik";

type FormFieldsName = {
    status_code: number
    calculate_salary: string
    status_desc: string
}

type BasicInformationFields = {
    touched: FormikTouched<FormFieldsName>
    errors: FormikErrors<FormFieldsName>
}


const BasicInformationFields = (props: BasicInformationFields)=>{
    const {touched, errors} = props

    return <>
        <AdaptableCard divider className="mb-4">
            <h3 className="mb-8">Add Salary status Master</h3>
            <div className="grid grid-cols-1"> 
                <div className="grid-col-1 flex gap-2">
                <div className="w-60">
                        <FormItem
                            label = "Status Code"
                            invalid = {(errors.status_code && touched.status_code)}
                            errorMessage={errors.status_code}
                        >
                        <Field
                                name = "status_codes"
                            >
                                {({field, form }: FieldProps)=>(
                                    <Select
                                    field={field}
                                    form={form}
                                    value={[]}
                                />
                                )}
                            </Field>
                        </FormItem>
                    </div>
                    <div className="ml-[37px] w-60">  
                    <FormItem
                            label = "Calculate Salary"
                            invalid = {(errors.calculate_salary && touched.calculate_salary)}
                            errorMessage={errors.calculate_salary}
                        >
                        <Field
                                name = "calculate_salary"
                            >
                                {({field, form }: FieldProps)=>(
                                    <Select
                                    field={field}
                                    form={form}
                                    value={[]}
                                />
                                )}
                            </Field>
                        </FormItem>
                    </div>

                </div>
                <div className="grid">              
                    <div className="w-[525px]">
                        <FormItem
                            label = "Status DESC."
                            invalid = {(errors.status_desc && touched.status_desc)}
                            errorMessage={errors.status_desc}
                        >
                        <Field
                            type = "text"
                            name = "status_desc"
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