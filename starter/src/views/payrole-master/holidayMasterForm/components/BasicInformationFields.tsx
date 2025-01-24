import AdaptableCard from "@/components/shared/AdaptableCard"
import { FormItem, Input, Select } from "@/components/ui"
import { Field, FieldProps, FormikErrors, FormikTouched } from "formik";

type FormFieldsName = {
    holiday_date: number
    paid_holiday: string
    holiday_desc: string
}

type BasicInformationFields = {
    touched: FormikTouched<FormFieldsName>
    errors: FormikErrors<FormFieldsName>
}


const BasicInformationFields = (props: BasicInformationFields)=>{
    const {touched, errors} = props

    return <>
        <AdaptableCard divider className="mb-4">
            <h3 className="mb-8">Add Holiday Master</h3>
            <div className="grid grid-cols-1"> 
                <div className="grid-col-1 flex gap-2">
                    <div className="w-60">  
                        <FormItem
                        label = "Holiday Date"
                        invalid = {(errors.holiday_date && touched.holiday_date)}
                        errorMessage={errors.holiday_date}
                        >
                            <Field
                                type = "text"
                                name = "holiday_date"
                                placeholder = ""
                                component = {Input}
                            />
                        </FormItem>
                    </div>
                    <div className="ml-[37px] w-60">
                        <FormItem
                            label = "Paid Holiday ?"
                            invalid = {(errors.paid_holiday && touched.paid_holiday)}
                            errorMessage={errors.paid_holiday}
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
                <div className="grid">              
                    <div className="w-[525px]">
                        <FormItem
                            label = "Holiday Desc."
                            invalid = {(errors.holiday_desc && touched.holiday_desc)}
                            errorMessage={errors.holiday_desc}
                        >
                        <Field
                            type = "text"
                            name = "holiday_desc"
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