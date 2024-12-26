import AdaptableCard from "@/components/shared/AdaptableCard"
import { FormItem, Input } from "@/components/ui"
import { Field, FormikErrors, FormikTouched } from "formik"

type FormFieldsName = {
    order_code: number
    order_name: string
}

type BasicInformationFields = {
    touched: FormikTouched<FormFieldsName>
    errors: FormikErrors<FormFieldsName>
}

const BasicInformationFields = (props: BasicInformationFields)=>{

    const {touched, errors} = props;

    return <>
        <AdaptableCard divider className="mb-4">
            <h3 className="mb-8">Add Purchase Order Type</h3>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4"> 
                <div className="col-span-1">
                    <FormItem
                        label = "State Code"
                        invalid = {(errors.order_code && touched.order_code)}
                        errorMessage={errors.order_code}
                    >
                    <Field
                        type = "text"
                        name = "order_code"
                        placeholder = ""
                        component = {Input}
                    />
                    </FormItem>
                </div>
                <div className="col-span-1">  
                    <FormItem
                    label = "Country Name"
                    invalid = {(errors.order_name && touched.order_name)}
                    errorMessage={errors.order_name}
                    >
                        <Field
                            type = "text"
                            name = "order_name"
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