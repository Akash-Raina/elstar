import AdaptableCard from "@/components/shared/AdaptableCard"
import { FormItem, Input } from "@/components/ui"
import { Field, FormikErrors, FormikTouched } from "formik";

type FormFieldsName = {
    pan_deductor: string
    tan_deductor: string
    issuing_authority_name: string
    issuing_authority_father_name: string
    designation_of_issuing_authority: string
    place: string
    date: string
    chapter_vi_a_limit: number
}

type BasicInformationFields = {
    touched: FormikTouched<FormFieldsName>
    errors: FormikErrors<FormFieldsName>
}


const BasicInformationFields = (props: BasicInformationFields)=>{
    const {touched, errors} = props

    return <>
        <AdaptableCard divider className="mb-4">
            <h3 className="mb-8">Add From 16 Setting</h3>
            <div className="grid grid-cols-1"> 
                <div className="grid-col-1 flex gap-2">
                    <div className="w-60">  
                        <FormItem
                        label = "Pan Deductor"
                        invalid = {(errors.pan_deductor && touched.pan_deductor)}
                        errorMessage={errors.pan_deductor}
                        >
                            <Field
                                type = "text"
                                name = "pan_deductor"
                                placeholder = ""
                                component = {Input}
                            />
                        </FormItem>
                    </div>
                    <div className="ml-[37px] w-60">
                        <FormItem
                            label = "Tan Deductor"
                            invalid = {(errors.tan_deductor && touched.tan_deductor)}
                            errorMessage={errors.tan_deductor}
                        >
                        <Field
                            type = "text"
                            name = "tan_deductor"
                            placeholder = ""
                            component = {Input}
                        />
                        </FormItem>
                    </div>
                </div>
                <div className="grid-col-1 flex gap-2">              
                <div className="w-[525px]">
                        <FormItem
                            label = "Issuing Authority Name"
                            invalid = {(errors.issuing_authority_name && touched.issuing_authority_name)}
                            errorMessage={errors.issuing_authority_name}
                        >
                        <Field
                            type = "text"
                            name = "issuing_authority_name"
                            placeholder = ""
                            component = {Input}
                        />
                        </FormItem>
                    </div>
                </div>
                <div className="grid-col-1 flex gap-2">              
                    <div className="w-[525px]">
                        <FormItem
                            label = "Issuing Authority Father Name"
                            invalid = {(errors.issuing_authority_father_name && touched.issuing_authority_father_name)}
                            errorMessage={errors.issuing_authority_father_name}
                        >
                        <Field
                            type = "text"
                            name = "issuing_authority_father_name"
                            placeholder = ""
                            component = {Input}
                        />
                        </FormItem>
                    </div>
                </div>
                <div className="grid-col-1 flex gap-2">              
                    <div className="w-[525px]">
                        <FormItem
                            label = "Designation of Issuing Authority"
                            invalid = {(errors.designation_of_issuing_authority && touched.designation_of_issuing_authority)}
                            errorMessage={errors.designation_of_issuing_authority}
                        >
                        <Field
                            type = "text"
                            name = "designation_of_issuing_authority"
                            placeholder = ""
                            component = {Input}
                        />
                        </FormItem>
                    </div>
                </div>
                <div className="grid-col-1 flex gap-2">              
                    <div className="w-[525px]">
                        <FormItem
                            label = "Place"
                            invalid = {(errors.place && touched.place)}
                            errorMessage={errors.place}
                        >
                        <Field
                            type = "text"
                            name = "place"
                            placeholder = ""
                            component = {Input}
                        />
                        </FormItem>
                    </div>
                </div>
                <div className="grid-col-1 flex gap-2">
                    <div className="w-60">  
                        <FormItem
                        label = "Date"
                        invalid = {(errors.date && touched.date)}
                        errorMessage={errors.date}
                        >
                            <Field
                                type = "text"
                                name = "date"
                                placeholder = ""
                                component = {Input}
                            />
                        </FormItem>
                    </div>
                    <div className="ml-[37px] w-60">
                        <FormItem
                            label = "Chapter VI-A Limit"
                            invalid = {(errors.chapter_vi_a_limit && touched.chapter_vi_a_limit)}
                            errorMessage={errors.chapter_vi_a_limit}
                        >
                        <Field
                            type = "text"
                            name = "chapter_vi_a_limit"
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