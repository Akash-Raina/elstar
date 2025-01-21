import AdaptableCard from "@/components/shared/AdaptableCard"
import { FormItem, Input, Select } from "@/components/ui"
import { Field, FieldProps, FormikErrors, FormikTouched } from "formik";

type FormFieldsName = {
    employee_no: number
    application_code: string
    old_employee_code: number
    employee_name: string
    salary_percentage: string
    name_as_per_bank: string
}

type BasicInformationFields = {
    touched: FormikTouched<FormFieldsName>
    errors: FormikErrors<FormFieldsName>
}

const BasicInformationFields = (props: BasicInformationFields)=>{
    const {touched, errors} = props

    return <>
        <AdaptableCard divider className="mb-4">
            <h3 className="mb-8">Add Employee Master</h3>
            <div className="grid grid-cols-1"> 
                <div className="grid-col-1 flex gap-2">
                    <div className="w-60">  
                        <FormItem
                            label = "Employee No"
                            invalid = {(errors.employee_no && touched.employee_no)}
                            errorMessage={errors.employee_no}
                        >
                            <Field
                                type = "text"
                                name = "employee_no"
                                placeholder = ""
                                component = {Input}
                            />
                        </FormItem>
                    </div>
                    <div className="ml-[37px] w-60">
                        <FormItem
                            label = "Application Code"
                            invalid = {(errors.application_code && touched.application_code)}
                            errorMessage={errors.application_code}
                        >
                        <Field
                                name = "ask_permanent_date"
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
                    <div className="ml-[80px] w-60">
                        <FormItem
                            label = "Old Employee Code"
                            invalid = {(errors.old_employee_code && touched.old_employee_code)}
                            errorMessage={errors.old_employee_code}
                        >
                        <Field
                                name = "ask_permanent_date"
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
                <div className="grid-col-1 flex gap-2">                
                    <div className="w-[525px]">
                        <FormItem
                            label = "Employee Name"
                            invalid = {(errors.employee_name && touched.employee_name)}
                            errorMessage={errors.employee_name}
                        >
                        <Field
                            type = "text"
                            name = "employee_name"
                            placeholder = ""
                            component = {Input}
                        />
                        </FormItem>
                    </div>
                    <div className="ml-[80px] w-60">
                        <FormItem
                            label = "Salary Percentage"
                            invalid = {(errors.salary_percentage && touched.salary_percentage)}
                            errorMessage={errors.salary_percentage}
                        >
                        <Field
                            type = "text"
                            name = "salary_percentage"
                            placeholder = ""
                            component = {Input}
                        />
                        </FormItem>
                    </div>
                </div>
                <div className="grid-col-1 flex gap-2">                
                    <div className="w-[525px]">
                        <FormItem
                            label = "Name as per bank"
                            invalid = {(errors.name_as_per_bank && touched.name_as_per_bank)}
                            errorMessage={errors.name_as_per_bank}
                        >
                        <Field
                            type = "text"
                            name = "name_as_per_bank"
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