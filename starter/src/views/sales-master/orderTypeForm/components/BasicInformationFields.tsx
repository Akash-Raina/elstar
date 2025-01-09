import AdaptableCard from "@/components/shared/AdaptableCard"
import { Button, FormItem, Input } from "@/components/ui"
import { Field, FormikErrors, FormikTouched } from "formik";

type FormFieldsName = {
    code: number
    name: string
    subgroup: string
}

type BasicInformationFields = {
    touched: FormikTouched<FormFieldsName>
    errors: FormikErrors<FormFieldsName>
}

const BasicInformationFields = (props: BasicInformationFields)=>{
    const {touched, errors} = props

    return <>
        <AdaptableCard divider className="mb-4">
            <h3 className="mb-8">Order Acceptance Type</h3>
            <div className="grid grid-cols-1"> 
                <div className="grid-col-1 flex gap-2">
                    <div className="w-60">  
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
                    <div className="ml-[37px] w-60">
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

                </div>
                <div className="grid-col-1"> 
                    <div className=" w-60">
                        <FormItem
                            label = "Subgroup"
                            invalid = {(errors.subgroup && touched.subgroup)}
                            errorMessage={errors.subgroup}
                        >
                        <Field
                            type = "text"
                            name = "subgroup"
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