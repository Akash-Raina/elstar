import AdaptableCard from "@/components/shared/AdaptableCard"
import { FormItem, Input } from "@/components/ui"
import { Field, FormikErrors, FormikTouched } from "formik"

type FormFieldsName = {
    code: string
    name: string
}

type BasicInformationFields = {
    touched: FormikTouched<FormFieldsName>
    errors: FormikErrors<FormFieldsName>
}

const BasicInformationFields = (props: BasicInformationFields)=>{
    const {touched, errors} = props

    return <>
        <AdaptableCard divider className="mb-4">
            <h3 className="mb-8">Country</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4"> 
                <div className="col-span-1">
                    <FormItem
                        label = "Code"
                        invalid = {(errors.code && touched.code)}
                        errorMessage={errors.code}
                    >
                    <Field
                        type = "text"
                        name = "currency_name"
                        placeholder = ""
                        component = {Input}
                    />
                    </FormItem>
                </div>
                <div>  
                    <FormItem
                    label = "Name"
                    invalid = {(errors.name && touched.name)}
                    errorMessage={errors.name}
                    >
                        <Field
                            type = "text"
                            name = "name"
                            placeholder = ""
                            component = {Input}
                        />
                    </FormItem>
                </div>
            </div>
        </AdaptableCard>
    </>
}

export default BasicInformationFields