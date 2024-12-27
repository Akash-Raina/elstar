import AdaptableCard from "@/components/shared/AdaptableCard"
import { FormItem, Input } from "@/components/ui"
import { Field, FormikErrors, FormikTouched } from "formik"

type FormFieldsName = {
    code: number
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
            <h3 className="mb-8">Add Tender Type  </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> 
                <div className="col-span-1">  
                    <FormItem
                    label = "Code"
                    invalid = {(errors.code && touched.code)}
                    errorMessage={errors.code}
                    >
                        <Field
                            type = "text"
                            name = "code"
                            placeholder = ""
                            component = {Input}
                        />
                    </FormItem>
                </div>
                <div className="col-span-1">
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
                <div className="col-span-1 flex justify-start items-center gap-2">
                    <Field
                        type = "checkbox"
                        className="w-4 h-4"
                    />
                    <label className="h-5 font-semibold text-base">Revenue</label>
                </div>
                <div className="col-span-1 flex justify-start items-center gap-2">
                    <Field
                        type = "checkbox"
                        className="w-4 h-4"
                    />
                    <label className="h-5 font-semibold text-base">Capital</label>
                </div>
            </div>
        </AdaptableCard>
    </>
}

export default BasicInformationFields