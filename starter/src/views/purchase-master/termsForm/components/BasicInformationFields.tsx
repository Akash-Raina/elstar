import AdaptableCard from "@/components/shared/AdaptableCard"
import { FormItem, Input } from "@/components/ui"
import { Field, FormikErrors, FormikTouched } from "formik"

type FormFieldsName = {
    terms_code: number
    document_no: string
    description: string
    default_value: string
    printing_index: string
}

type BasicInformationFields = {
    touched: FormikTouched<FormFieldsName>
    errors: FormikErrors<FormFieldsName>
}

const BasicInformationFields = (props: BasicInformationFields)=>{

    const {touched, errors} = props;

    return <>
        <AdaptableCard divider className="mb-4">
            <h3 className="mb-8">Add Terms & Conditions</h3>
            <div className="grid grid-cols-3 md:grid-cols-3 gap-4"> 
                <div className="col-span-1">
                    <FormItem
                        label = "Code"
                        invalid = {(errors.terms_code && touched.terms_code)}
                        errorMessage={errors.terms_code}
                    >
                    <Field
                        type = "text"
                        name = "terms_code"
                        placeholder = ""
                        component = {Input}
                    />
                    </FormItem>
                </div>
                <div className="col-span-1">  
                    <FormItem
                    label = "Document No"
                    invalid = {(errors.document_no && touched.document_no)}
                    errorMessage={errors.document_no}
                    >
                        <Field
                            type = "text"
                            name = "document_no"
                            placeholder = ""
                            component = {Input}
                        />
                    </FormItem>
                </div>
                <div className="col-span-1">  
                    <FormItem
                    label = "Description"
                    invalid = {(errors.description && touched.description)}
                    errorMessage={errors.description}
                    >
                        <Field
                            type = "text"
                            name = "description"
                            placeholder = ""
                            component = {Input}
                        />
                    </FormItem>
                </div>
                <div className="col-span-1">  
                    <FormItem
                    label = "Default Value"
                    invalid = {(errors.default_value && touched.default_value)}
                    errorMessage={errors.default_value}
                    >
                        <Field
                            type = "text"
                            name = "default_value"
                            placeholder = ""
                            component = {Input}
                        />
                    </FormItem>
                </div>
                <div className="col-span-1">  
                    <FormItem
                    label = "Printing Index"
                    invalid = {(errors.printing_index && touched.printing_index)}
                    errorMessage={errors.printing_index}
                    >
                        <Field
                            type = "text"
                            name = "printing_index"
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