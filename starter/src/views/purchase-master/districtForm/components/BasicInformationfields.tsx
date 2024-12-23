import AdaptableCard from "@/components/shared/AdaptableCard"
import { FormItem, Input } from "@/components/ui"
import { Field, FormikErrors, FormikTouched } from "formik"

type FormFieldsName = {
    district_code: number
    district_name: string
    state: string
}

type BasicInformationFields = {
    touched: FormikTouched<FormFieldsName>
    errors: FormikErrors<FormFieldsName>
}

const BasicInformationFields = (props: BasicInformationFields)=>{
    const {touched, errors} = props

    return <>
        <AdaptableCard divider className="mb-4">
            <h3 className="mb-8">Add District Master</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4"> 
                <div className="col-span-1">
                    <FormItem
                        label = "District Code"
                        invalid = {(errors.district_code && touched.district_code)}
                        errorMessage={errors.district_code}
                    >
                    <Field
                        type = "text"
                        name = "district_code"
                        placeholder = "District Code"
                        component = {Input}
                    />
                    </FormItem>
                </div>
                <div className="col-span-1">  
                    <FormItem
                    label = "District Name"
                    invalid = {(errors.district_name && touched.district_name)}
                    errorMessage={errors.district_name}
                    >
                        <Field
                            type = "text"
                            name = "district_name"
                            placeholder = "District Name"
                            component = {Input}
                        />
                    </FormItem>
                </div>
                <div className="col-span-1">  
                    <FormItem
                    label = "State"
                    invalid = {(errors.state && touched.state)}
                    errorMessage={errors.state}
                    >
                        <Field
                            type = "text"
                            name = "state"
                            placeholder = "State"
                            component = {Input}
                        />
                    </FormItem>
                </div>
            </div>
        </AdaptableCard>
    </>
}

export default BasicInformationFields