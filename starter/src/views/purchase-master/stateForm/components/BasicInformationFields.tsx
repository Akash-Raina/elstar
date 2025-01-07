import AdaptableCard from "@/components/shared/AdaptableCard"
import { FormItem, Input } from "@/components/ui"
import { Field, FormikErrors, FormikTouched } from "formik"

type FormFieldsName = {
    state_code: number
    state_name: string
    state_code_gst: string
    country_name: string
}

type BasicInformationFields = {
    touched: FormikTouched<FormFieldsName>
    errors: FormikErrors<FormFieldsName>
}

const BasicInformationFields = (props: BasicInformationFields)=>{

    const {touched, errors} = props;

    return <>
        <AdaptableCard divider className="mb-4">
            <h3 className="mb-8">Add State Master</h3>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4"> 
                <div className="col-span-1">
                    <FormItem
                        label = "State Code"
                        invalid = {(errors.state_code && touched.state_code)}
                        errorMessage={errors.state_code}
                    >
                    <Field
                        type = "text"
                        name = "state_code"
                        placeholder = ""
                        component = {Input}
                    />
                    </FormItem>
                </div>
                <div className="col-span-1">  
                    <FormItem
                    label = "Country Name"
                    invalid = {(errors.state_name && touched.state_name)}
                    errorMessage={errors.state_name}
                    >
                        <Field
                            type = "text"
                            name = "state_name"
                            placeholder = ""
                            component = {Input}
                        />
                    </FormItem>
                </div>
                <div className="col-span-1">  
                    <FormItem
                    label = "State Name(GST)"
                    invalid = {(errors.state_code_gst && touched.state_code_gst)}
                    errorMessage={errors.state_code_gst}
                    >
                        <Field
                            type = "text"
                            name = "state_code_gst"
                            placeholder = ""
                            component = {Input}
                        />
                    </FormItem>
                </div>
                <div className="col-span-1">  
                    <FormItem
                    label = "Country Name"
                    invalid = {(errors.country_name && touched.country_name)}
                    errorMessage={errors.country_name}
                    >
                        <Field
                            type = "text"
                            name = "country_name"
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