import AdaptableCard from "@/components/shared/AdaptableCard"
import { FormItem, Input } from "@/components/ui"
import { Field, FormikErrors, FormikTouched } from "formik"

type FormFieldsName = {
    country_code: number
    country_name: string
}

type BasicInformationFields = {
    touched: FormikTouched<FormFieldsName>
    errors: FormikErrors<FormFieldsName>
}

const BasicInformationFields = (props: BasicInformationFields)=>{
    const {touched, errors} = props

    return <>
        <AdaptableCard divider className="mb-4">
            <h3 className="mb-8">Add Country Master</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> 
                <div className="col-span-1">
                    <FormItem
                        label = "Country Code"
                        invalid = {(errors.country_code && touched.country_code)}
                        errorMessage={errors.country_code}
                    >
                    <Field
                        type = "text"
                        name = "country_code"
                        placeholder = "Country Code"
                        component = {Input}
                    />
                    </FormItem>
                </div>
                <div>  
                    <FormItem
                    label = "Country Name"
                    invalid = {(errors.country_name && touched.country_name)}
                    errorMessage={errors.country_name}
                    >
                        <Field
                            type = "text"
                            name = "country_name"
                            placeholder = "Country Name"
                            component = {Input}
                        />
                    </FormItem>
                </div>
            </div>
        </AdaptableCard>
    </>
}

export default BasicInformationFields