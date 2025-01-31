import AdaptableCard from "@/components/shared/AdaptableCard"
import { FormItem, Input, Select } from "@/components/ui"
import { Field, FieldProps, FormikErrors, FormikTouched } from "formik"

type FormFieldsName = {
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

type BasicInformationFields = {
    touched: FormikTouched<FormFieldsName>
    errors: FormikErrors<FormFieldsName>
}

const options = [{label: "Yes", value: 0}, {label: 'No', value: 1}]

const BasicInformationFields = (props: BasicInformationFields)=>{

    const {touched, errors} = props;

    return <>
        <AdaptableCard divider className="mb-4">
            <h3 className="mb-8">Add Product</h3>
            <div className="grid grid-cols-1"> 
                <div className="grid-col-1 flex gap-2">
                    <div className="w-60">  
                        <FormItem
                        label = "Code"
                        invalid = {(errors.code && touched.code)}
                        errorMessage={errors.code}
                        >
                            <Field
                                name = "code"
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
                        label = "Short Name"
                        invalid = {(errors.short_name && touched.short_name)}
                        errorMessage={errors.short_name}
                        >
                            <Field
                                type = "text"
                                name = "short_name"
                                placeholder = ""
                                component = {Input}
                            />
                        </FormItem>
                    </div>
                </div>
                <div className="grid-col-1 flex gap-2">
                    <div className="w-[525px]">
                        <FormItem
                            label = "Leave Type (Dev.)"
                            invalid = {(errors.leave_type_dev && touched.leave_type_dev)}
                            errorMessage={errors.leave_type_dev}
                        >
                        <Field
                            type = "text"
                            name = "leave_type_dev"
                            placeholder = ""
                            component = {Input}
                        />
                        </FormItem>
                    </div>
                </div>
                <div className="grid-col-1 flex gap-2">
                    <div className="w-[525px]">
                        <FormItem
                            label = "Leave Type"
                            invalid = {(errors.leave_type && touched.leave_type)}
                            errorMessage={errors.leave_type}
                        >
                        <Field
                            type = "text"
                            name = "leave_type"
                            placeholder = ""
                            component = {Input}
                        />
                        </FormItem>
                    </div>
                </div>
                <div className="grid-col-1 flex gap-2">
                    <div className="w-60">  
                        <FormItem
                        label = "Bal. carry Forward To Next Year "
                        invalid = {(errors.bal_carry_forward_to_next_year && touched.bal_carry_forward_to_next_year)}
                        errorMessage={errors.bal_carry_forward_to_next_year}
                        >
                            <Field
                                name = "bal_carry_forward_to_next_year"
                            >
                                {({field, form }: FieldProps)=>(
                                    <Select
                                    field={field}
                                    form={form}
                                    value={options}
                                />
                                )}
                            </Field>
                        </FormItem>
                    </div>
                    <div className="ml-[37px] w-60">  
                        <FormItem
                            label = "Paid Leave?"
                            invalid = {(errors.paid_leave && touched.paid_leave)}
                            errorMessage={errors.paid_leave}
                            >
                                <Field
                                    name = "paid_leave"
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
                    <div className="w-60">  
                        <FormItem
                            label = "Min. Number Of Days"
                            invalid = {(errors.min_number_of_days && touched.min_number_of_days)}
                            errorMessage={errors.min_number_of_days}
                            >
                            <Field
                                type = "text"
                                name = "min_number_of_days"
                                placeholder = ""
                                component = {Input}
                            />
                        </FormItem>
                    </div>
                    <div className="ml-[37px] w-60">  
                        <FormItem
                            label = "Max. Number Of Days"
                            invalid = {(errors.max_number_of_days && touched.max_number_of_days)}
                            errorMessage={errors.max_number_of_days}
                            >
                            <Field
                                type = "text"
                                name = "max_number_of_days"
                                placeholder = ""
                                component = {Input}
                            />
                        </FormItem>
                    </div>
                </div>
                <div className="grid-col-1 flex gap-2">
                    <div className="w-60">  
                        <FormItem
                            label = "Check Balance"
                            invalid = {(errors.check_balance && touched.check_balance)}
                            errorMessage={errors.check_balance}
                            >
                            <Field
                                type = "text"
                                name = "check_balance"
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