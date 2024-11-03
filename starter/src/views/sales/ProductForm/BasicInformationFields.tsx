import { AdaptableCard, RichTextEditor } from "@/components/shared"
import  {Input}  from "@/components/ui"
import { FormItem } from "@/components/ui/Form"
import { Field, FieldProps, FormikErrors, FormikTouched } from "formik"

type FormFieldsName = {
    product_name: string
    code: string
    description: string
}

type BasicInformationFields = {
    touched: FormikTouched<FormFieldsName>
    errors: FormikErrors<FormFieldsName>
}

const BasicInformationFields = (props: BasicInformationFields)=>{

    const { touched, errors } = props
    return <>
        <AdaptableCard divider className="mb-4">
            <h5>Basic Information</h5>
            <p className="mb-6">Section to config basic product information</p>

            <FormItem
            label="Product Name"
            invalid = {(errors.product_name && touched.product_name)}
            errorMessage={errors.product_name}
            >
                <Field 
                    type = "text" 
                    name = "product_name"  
                    placeholder = "Name"
                    component = {Input}
                />
            </FormItem>

            <FormItem
                label="Code"
                invalid = {(errors.code && touched.code)}
                errorMessage={errors.code}
            >
                <Field
                    type = "text"
                    name = "code"
                    placeholder = "Code"
                    component = {Input}
                />
            </FormItem>

            <FormItem
                label="Description"
                labelClass="!justify-start"
                invalid = {(errors.description && touched.description)}
                errorMessage={errors.description}
            >
                <Field name = "description">
                    {({ field, form }: FieldProps) => (
                            <RichTextEditor
                                value={field.value}
                                onChange={(val) =>
                                    form.setFieldValue(field.name, val)
                                }
                            />
                        )}
                </Field>
            </FormItem>
        </AdaptableCard>
    </>
}

export default BasicInformationFields