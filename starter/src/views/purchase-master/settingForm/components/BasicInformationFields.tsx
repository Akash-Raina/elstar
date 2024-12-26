import AdaptableCard from "@/components/shared/AdaptableCard"
import { FormItem, Input } from "@/components/ui"
import { Field, FormikErrors, FormikTouched } from "formik"

type FormFieldsName = {
    gl_code: number
    gl_name: string
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
                        label = "GL Code"
                        invalid = {(errors.gl_code && touched.gl_code)}
                        errorMessage={errors.gl_code}
                    >
                    <Field
                        type = "text"
                        name = "gl_code"
                        placeholder = ""
                        component = {Input}
                    />
                    </FormItem>
                </div>
                <div className="col-span-1">  
                    <FormItem
                    label = "Name"
                    invalid = {(errors.gl_name && touched.gl_name)}
                    errorMessage={errors.gl_name}
                    >
                        <Field
                            type = "text"
                            name = "gl_name"
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