import { DoubleSidedImage } from "@/components/shared"
import AdaptableCard from "@/components/shared/AdaptableCard"
import { FormItem, Input, Upload } from "@/components/ui"
import { FormModel } from "@/views/sales/ProductForm"
import { Field, FieldInputProps, FieldProps, FormikErrors, FormikProps, FormikTouched } from "formik";

type FormFieldsName = {
    bank_name: string
    branch_name: string
    ifsc_code: string
    beneficiary_name: string
    account_no: number
}

type BasicInformationFields = {
    touched: FormikTouched<FormFieldsName>
    errors: FormikErrors<FormFieldsName>
    type: string
}

const BasicInformationFields = (props: BasicInformationFields)=>{
    const {touched, errors, type} = props

    return <>
        <AdaptableCard divider className="mb-4">
            <h5 className="mb-5">Bank Details {`${type}`}</h5>
            <div className="grid grid-cols-1"> 
                <div className="grid-col-1 flex gap-2">
                    <div className="w-60">  
                        <FormItem
                        label = "Bank Name"
                        invalid = {(errors.bank_name && touched.bank_name)}
                        errorMessage={errors.bank_name}
                        >
                            <Field
                                type = "text"
                                name = "bank_names"
                                placeholder = ""
                                component = {Input}
                            />
                        </FormItem>
                    </div>
                    <div className="ml-[37px] w-60">
                        <FormItem
                            label = "Branch Name"
                            invalid = {(errors.branch_name && touched.branch_name)}
                            errorMessage={errors.branch_name}
                        >
                        <Field
                            type = "text"
                            name = "branch_name"
                            placeholder = ""
                            component = {Input}
                        />
                        </FormItem>
                    </div>
                    <div className="ml-[80px] w-60">
                        <FormItem
                            label = "IFSC Code"
                            invalid = {(errors.ifsc_code && touched.ifsc_code)}
                            errorMessage={errors.ifsc_code}
                        >
                        <Field
                            type = "text"
                            name = "ifsc_code"
                            placeholder = ""
                            component = {Input}
                        />
                        </FormItem>
                    </div>
                </div>
                <div className="grid-col-1 flex gap-2">                
                    <div className="w-60">
                        <FormItem
                            label = "Beneficiary Name"
                            invalid = {(errors.beneficiary_name && touched.beneficiary_name)}
                            errorMessage={errors.beneficiary_name}
                        >
                        <Field
                            type = "text"
                            name = "beneficiary_name"
                            placeholder = ""
                            component = {Input}
                        />
                        </FormItem>
                    </div>
                    <div className="ml-[37px] w-60">
                        <FormItem
                            label = "Account No"
                            invalid = {(errors.account_no && touched.account_no)}
                            errorMessage={errors.account_no}
                        >
                        <Field
                            type = "text"
                            name = "account_no"
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