import AdaptableCard from "@/components/shared/AdaptableCard"
import { FormItem, Input } from "@/components/ui"
import { Field, FormikErrors, FormikTouched } from "formik"

type FormFieldsName = {
    sub_code: number
    main_group: string
    storing_unit: string
    description: string
}

type BasicInformationFields = {
    touched: FormikTouched<FormFieldsName>
    errors: FormikErrors<FormFieldsName>
}

const BasicInformationFields = (props: BasicInformationFields)=>{
    const {touched, errors} = props

    return <>
        <AdaptableCard divider className="mb-4">
            <h3 className="mb-8">Add Sub Group  </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4"> 
                <div className="col-span-1">  
                    <FormItem
                    label = "Main Group"
                    invalid = {(errors.main_group && touched.main_group)}
                    errorMessage={errors.main_group}
                    >
                        <Field
                            type = "text"
                            name = "main_group"
                            placeholder = ""
                            component = {Input}
                        />
                    </FormItem>
                </div>
                <div className="col-span-1">
                    <FormItem
                        label = "Code"
                        invalid = {(errors.sub_code && touched.sub_code)}
                        errorMessage={errors.sub_code}
                    >
                    <Field
                        type = "text"
                        name = "sub_code"
                        placeholder = ""
                        component = {Input}
                    />
                    </FormItem>
                </div>
                <div className="col-span-1">
                    <FormItem
                        label = "Storing Unit"
                        invalid = {(errors.storing_unit && touched.storing_unit)}
                        errorMessage={errors.storing_unit}
                    >
                    <Field
                        type = "text"
                        name = "storing_unit"
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
            </div>
        </AdaptableCard>
    </>
}

export default BasicInformationFields