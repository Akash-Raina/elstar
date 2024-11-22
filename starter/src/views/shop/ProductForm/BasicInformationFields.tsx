import { AdaptableCard } from "@/components/shared"
import { FormItem, Input } from "@/components/ui"
import { Field, FormikErrors, FormikTouched } from "formik"

type FormFieldsName = {
    product_name: string
}

type BasicInformationFields = {
    touched: FormikTouched<FormFieldsName>
    errors: FormikErrors<FormFieldsName>
}
export const BasicInformationFields = (props: BasicInformationFields)=>{

    const {touched, errors} = props

    return <>
        <AdaptableCard divider className="mb-4">
            <h5>Basic Information</h5>
            <p className="mb-6">Section to config basic product information</p>

            <FormItem
            label = "Product Name"
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
        </AdaptableCard>
    </>
}

export default BasicInformationFields