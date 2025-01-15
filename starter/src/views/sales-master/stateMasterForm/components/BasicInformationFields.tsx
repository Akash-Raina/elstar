import AdaptableCard from "@/components/shared/AdaptableCard"
import { Button, FormItem, Input } from "@/components/ui"
import { Field, FormikErrors, FormikTouched } from "formik";

type FormFieldsName = {
    state_code: number
    state_name: string
    state_gst: number
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
            <h3 className="mb-8">State Master</h3>
            <div className="grid grid-cols-1"> 
                <div className="grid-col-1 flex gap-2">
                    <div className="w-60">  
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
                    <div className="ml-[37px] w-60">
                        <FormItem
                            label = "State Name"
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
                    <div className="ml-[80px] w-60">
                        <FormItem
                            label = "State Code(GST)"
                            invalid = {(errors.state_gst && touched.state_gst)}
                            errorMessage={errors.state_gst}
                        >
                        <Field
                            type = "text"
                            name = "state_gst"
                            placeholder = ""
                            component = {Input}
                        />
                        </FormItem>
                    </div>
                </div>
                <div className="grid-col-1">                
                    <div className="w-60">
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
            </div>
        </AdaptableCard>
    </>
}

export default BasicInformationFields