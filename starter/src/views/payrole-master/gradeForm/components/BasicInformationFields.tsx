import AdaptableCard from "@/components/shared/AdaptableCard"
import { FormItem, Input } from "@/components/ui"
import { Field, FormikErrors, FormikTouched } from "formik";

type FormFieldsName = {
    code: string
    printing_sequence: string
    grade: string
    retention_applicable:string
}

type BasicInformationFields = {
    touched: FormikTouched<FormFieldsName>
    errors: FormikErrors<FormFieldsName>
}


const BasicInformationFields = (props: BasicInformationFields)=>{
    const {touched, errors} = props

    return <>
        <AdaptableCard divider className="mb-4">
            <h3 className="mb-8">Add Grade</h3>
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
                            label = "Printing Sequence"
                            invalid = {(errors.printing_sequence && touched.printing_sequence)}
                            errorMessage={errors.printing_sequence}
                        >
                        <Field
                            type = "text"
                            name = "printing_sequence"
                            placeholder = ""
                            component = {Input}
                        />
                        </FormItem>
                    </div>
                </div>
                <div className="grid-col-1 flex gap-2">              
                <div className="w-[525px]">
                        <FormItem
                            label = "Grade"
                            invalid = {(errors.grade && touched.grade)}
                            errorMessage={errors.grade}
                        >
                        <Field
                            type = "text"
                            name = "grade"
                            placeholder = ""
                            component = {Input}
                        />
                        </FormItem>
                    </div>
                </div>
                <div className="grid-col-1 flex gap-2">              
                    <div className="w-60">
                        <FormItem
                            label = "Retention Applicable "
                            invalid = {(errors.retention_applicable && touched.retention_applicable)}
                            errorMessage={errors.retention_applicable}
                        >
                        <Field
                            type = "text"
                            name = "retention_applicable"
                            placeholder = ""
                            component = {Input}
                        />
                        </FormItem>
                    </div>
                    <div className="ml-2 flex gap-2 items-center">
                        <div className="flex gap-2">
                            <input type="checkbox" />
                            <label htmlFor="">Yes</label>
                        </div>
                        <div className="flex gap-2">
                            <input type="checkbox" />
                            <label htmlFor="">No</label>
                        </div>
                    </div>
                </div>
            </div>
        </AdaptableCard>
    </>
}

export default BasicInformationFields