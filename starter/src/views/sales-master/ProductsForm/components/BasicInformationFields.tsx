import AdaptableCard from "@/components/shared/AdaptableCard"
import { FormItem, Input, Select } from "@/components/ui"
import { Field, FieldProps, FormikErrors, FormikTouched } from "formik"

type FormFieldsName = {
    product_type: string
    code: string
    description: string
    storing_unit: string
}

type BasicInformationFields = {
    touched: FormikTouched<FormFieldsName>
    errors: FormikErrors<FormFieldsName>
}

const options = [{label: "Product", value: 0}, {label: 'By Product', value: 1}]
const unit_options = [{label: "QTL", value: 0}]

const BasicInformationFields = (props: BasicInformationFields)=>{

    const {touched, errors} = props;

    return <>
        <AdaptableCard divider className="mb-4">
            <h3 className="mb-8">Add Product</h3>
            <div className="grid grid-cols-3 md:grid-cols-3 gap-4"> 
                <div className="col-span-1">
                    <FormItem
                        label = "Product type"
                        invalid = {(errors.product_type && touched.product_type)}
                        errorMessage={errors.product_type}
                    >
                    <Field
                            name = "product_type"
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
                <div className="col-span-1">  
                    <FormItem
                    label = "Storing Unit"
                    invalid = {(errors.storing_unit && touched.storing_unit)}
                    errorMessage={errors.storing_unit}
                    >
                        <Field
                            name = "storing_unit"
                        >
                            {({field, form }: FieldProps)=>(
                                <Select
                                    field={field}
                                    form={form}
                                    value={unit_options}
                                />
                            )}
                        </Field>
                    </FormItem>
                </div>
            </div>
        </AdaptableCard>    
    </>
}

export default BasicInformationFields