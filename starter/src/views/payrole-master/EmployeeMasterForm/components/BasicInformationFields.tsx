import AdaptableCard from "@/components/shared/AdaptableCard"
import { FormItem, Input, Select } from "@/components/ui"
import { Field, FieldProps, FormikErrors, FormikTouched } from "formik"

type FormFieldsName = {
    type_code: string
    description: string
    ask_permanent_date: string
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
                            label = "Type code"
                            invalid = {(errors.type_code && touched.type_code)}
                            errorMessage={errors.type_code}
                        >
                        <Field
                                type = "text"
                                name = "type_code"
                                placeholder = ""
                                component = {Input}
                            />
                        </FormItem>
                    </div>
                    <div className="ml-[37px] w-96">  
                        <FormItem
                        label = "Description"
                        invalid = {(errors.description && touched.description)}
                        errorMessage={errors.description}
                        >
                            <Field
                                type = "text"
                                name = "description"
                                placeholder = ""
                                component = {Input}
                            />
                        </FormItem>
                    </div>
                </div>
                <div className="grid-col-1 flex gap-2">
                    <div className="w-96">  
                        <FormItem
                        label = "Ask Permanent Date"
                        invalid = {(errors.ask_permanent_date && touched.ask_permanent_date)}
                        errorMessage={errors.ask_permanent_date}
                        >
                            <Field
                                name = "ask_permanent_date"
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
                </div>
                
            </div>
        </AdaptableCard>    
    </>
}

export default BasicInformationFields