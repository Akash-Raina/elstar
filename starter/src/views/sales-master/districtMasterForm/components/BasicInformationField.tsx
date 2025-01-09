import AdaptableCard from "@/components/shared/AdaptableCard"
import { Button, FormItem, Input } from "@/components/ui"
import { Field, FormikErrors, FormikTouched } from "formik";

type FormFieldsName = {
    section: string
    bill_type: string
    debit_gl_code: number
    credit_gl_code: number
}

type BasicInformationFields = {
    touched: FormikTouched<FormFieldsName>
    errors: FormikErrors<FormFieldsName>
}

const BasicInformationFields = (props: BasicInformationFields)=>{
    const {touched, errors} = props

    return <>
        <AdaptableCard divider className="mb-4">
            <h3 className="mb-8">District Master</h3>
            <div className="grid grid-cols-1"> 
                <div className="grid-col-1 flex gap-2">
                    <div className="w-60">  
                        <FormItem
                        label = "Section"
                        invalid = {(errors.section && touched.section)}
                        errorMessage={errors.section}
                        >
                            <Field
                                type = "text"
                                name = "section"
                                placeholder = ""
                                component = {Input}
                            />
                        </FormItem>
                    </div>
                    <div className="ml-[37px] w-60">
                        <FormItem
                            label = "Bill Type"
                            invalid = {(errors.bill_type && touched.bill_type)}
                            errorMessage={errors.bill_type}
                        >
                        <Field
                            type = "text"
                            name = "bill_type"
                            placeholder = ""
                            component = {Input}
                        />
                        </FormItem>
                    </div>
                    <div className="ml-[80px] w-60">
                        <FormItem
                            label = "Debit Gl Code"
                            invalid = {(errors.debit_gl_code && touched.debit_gl_code)}
                            errorMessage={errors.debit_gl_code}
                        >
                        <Field
                            type = "text"
                            name = "debit_gl_code"
                            placeholder = ""
                            component = {Input}
                        />
                        </FormItem>
                    </div>
                </div>
                <div className="grid-col-1">                
                    <div className="w-60">
                        <FormItem
                            label = "Credit GL Code"
                            invalid = {(errors.credit_gl_code && touched.credit_gl_code)}
                            errorMessage={errors.credit_gl_code}
                        >
                        <Field
                            type = "text"
                            name = "credit_gl_code"
                            placeholder = ""
                            component = {Input}
                        />
                        </FormItem>
                    </div>
                </div>
                <div className=" flex gap-2 mb-4">
                    <input type="checkbox"  className="w-[27px] h-[23px]"/>
                    <label className="text-lg font-semibold text-black">Enable Manual Weight</label>
                </div>
                <Button variant = 'solid' color="red" className="w-24 flex justify-center items-center"><span>Select Taxes</span></Button>
            </div>
        </AdaptableCard>
    </>
}

export default BasicInformationFields