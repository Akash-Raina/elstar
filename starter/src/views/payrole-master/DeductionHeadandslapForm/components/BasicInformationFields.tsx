import AdaptableCard from "@/components/shared/AdaptableCard"
import { FormItem, Input } from "@/components/ui"
import { Field, FormikErrors, FormikTouched } from "formik";

type FormFieldsName = {
    applicable_income_amount_from: number
    applicable_income_amount_to: number
    tax_amount: string
}

type BasicInformationFields = {
    touched: FormikTouched<FormFieldsName>
    errors: FormikErrors<FormFieldsName>
}


const BasicInformationFields = (props: BasicInformationFields)=>{
    const {touched, errors} = props

    return <>
        <AdaptableCard divider className="mb-4">
            <h3 className="mb-8">Add Deduction Head and Slab</h3>
            <div className="grid grid-cols-1"> 
                <div className="grid-col-1 flex gap-2">
                    <div className="w-64">  
                        <FormItem
                        label = "Applicable Income Amount From"
                        invalid = {(errors.applicable_income_amount_from && touched.applicable_income_amount_from)}
                        errorMessage={errors.applicable_income_amount_from}
                        >
                            <Field
                                type = "text"
                                name = "branch_code"
                                placeholder = ""
                                component = {Input}
                            />
                        </FormItem>
                    </div>
                </div>
                <div className="grid-col-1 flex gap-2">              
                <div className="w-64">
                        <FormItem
                            label = "Applicable Income Amount To"
                            invalid = {(errors.applicable_income_amount_to && touched.applicable_income_amount_to)}
                            errorMessage={errors.applicable_income_amount_to}
                        >
                        <Field
                            type = "text"
                            name = "applicable_income_amount_to"
                            placeholder = ""
                            component = {Input}
                        />
                        </FormItem>
                    </div>
                </div>
                <div className="grid-col-1 flex gap-2">              
                <div className="w-64">
                        <FormItem
                            label = "Tax Amount"
                            invalid = {(errors.tax_amount && touched.tax_amount)}
                            errorMessage={errors.tax_amount}
                        >
                        <Field
                            type = "text"
                            name = "tax_amount"
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