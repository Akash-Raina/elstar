import AdaptableCard from "@/components/shared/AdaptableCard"
import { FormItem, Input } from "@/components/ui"
import { Field, FormikErrors, FormikTouched } from "formik"

type FormFieldsName = {
    sub_category_name: string
}

type BasicInformationFields = {
    touched: FormikTouched<FormFieldsName>
    errors: FormikErrors<FormFieldsName>
}


const BasicInformationFields = (props: BasicInformationFields)=>{
    const {touched, errors} = props

    return <>
        <AdaptableCard divider className="mb-4">
            <h5>Basic Information</h5>
            <p className="mb-6">Section to config basic product information</p>

            <FormItem
            label = "SubCategory Name"
            invalid = {(errors.sub_category_name && touched.sub_category_name)}
            errorMessage={errors.sub_category_name}
            >
                <Field
                    type = "text"
                    name = "sub_category_name"
                    placeholder = "Name"
                    component = {Input}
                />
            </FormItem>
        </AdaptableCard>
    </>
}

export default BasicInformationFields