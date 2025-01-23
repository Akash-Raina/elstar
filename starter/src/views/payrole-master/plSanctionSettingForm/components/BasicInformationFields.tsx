import AdaptableCard from "@/components/shared/AdaptableCard"
import { FormItem, Input } from "@/components/ui"
import { Field, FormikErrors, FormikTouched } from "formik";

type FormFieldsName = {
    pl_sanction_days: number
    on_payable_days_completed: string
}

type BasicInformationFields = {
    touched: FormikTouched<FormFieldsName>
    errors: FormikErrors<FormFieldsName>
}


const BasicInformationFields = (props: BasicInformationFields)=>{
    const {touched, errors} = props

    return <>
        <AdaptableCard divider className="mb-4">
            <h3 className="mb-8">Add PL Sanction Setting</h3>
            <div className="grid grid-cols-1"> 
                <div className="grid-col-1 flex gap-2">
                    <div className="w-60">  
                        <FormItem
                        label = "PL Sanction Days"
                        invalid = {(errors.pl_sanction_days && touched.pl_sanction_days)}
                        errorMessage={errors.pl_sanction_days}
                        >
                            <Field
                                type = "text"
                                name = "pl_sanction_days"
                                placeholder = ""
                                component = {Input}
                            />
                        </FormItem>
                    </div>
                </div>
                <div className="grid">              
                    <div className="w-[525px]">
                        <FormItem
                            label = "On Payable Days Completed"
                            invalid = {(errors.on_payable_days_completed && touched.on_payable_days_completed)}
                            errorMessage={errors.on_payable_days_completed}
                        >
                        <Field
                            type = "text"
                            name = "on_payable_days_completed"
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