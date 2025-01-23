import AdaptableCard from "@/components/shared/AdaptableCard"
import { FormItem, Input } from "@/components/ui"
import { Field, FormikErrors, FormikTouched } from "formik";

type FormFieldsName = {
    basic_slab_id: string
}

type BasicInformationFields = {
    touched: FormikTouched<FormFieldsName>
    errors: FormikErrors<FormFieldsName>
}


const BasicInformationFields = (props: BasicInformationFields)=>{
    const {touched, errors} = props

    return <>
        <AdaptableCard divider className="mb-4">
            <h3 className="mb-8">Add Basic Slab</h3>
            <div className="grid grid-cols-1"> 
                <div className="grid-col-1 flex gap-2">
                    <div className="w-60">  
                        <FormItem
                        label = "Basic Slab ID"
                        invalid = {(errors.basic_slab_id && touched.basic_slab_id)}
                        errorMessage={errors.basic_slab_id}
                        >
                            <Field
                                type = "text"
                                name = "basic_slab_id"
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