import AdaptableCard from "@/components/shared/AdaptableCard"
import { FormItem, Input, Select } from "@/components/ui"
import { Field, FieldProps, FormikErrors, FormikTouched } from "formik";

type FormFieldsName = {
    employee_no: number
    section: string
    designation: string
}

type BasicInformationFields = {
    touched: FormikTouched<FormFieldsName>
    errors: FormikErrors<FormFieldsName>
}


const BasicInformationFields = (props: BasicInformationFields)=>{
    const {touched, errors} = props

    return <>
        <AdaptableCard divider className="mb-4">
            <h3 className="mb-8">Add opening Leave Balance</h3>
            <div className="grid grid-cols-1"> 
                <div className="grid-col-1 flex gap-2">
                <div className="w-60">
                        <FormItem
                            label = "Employee No"
                            invalid = {(errors.employee_no && touched.employee_no)}
                            errorMessage={errors.employee_no}
                        >
                        <Field
                                name = "employee_no"
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
                        label = "Section"
                        invalid = {(errors.section && touched.section)}
                        errorMessage={errors.section}
                        >
                            <Field
                                type = "text"
                                name = "section"
                                placeholder = ""
                                component = {Input}
                            />
                        </FormItem>
                    </div>

                </div>
                <div className="grid">              
                    <div className="w-[525px]">
                        <FormItem
                            label = "Designation"
                            invalid = {(errors.designation && touched.designation)}
                            errorMessage={errors.designation}
                        >
                        <Field
                            type = "text"
                            name = "designation"
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