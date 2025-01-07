import { DoubleSidedImage } from "@/components/shared"
import AdaptableCard from "@/components/shared/AdaptableCard"
import { Button, FormItem, Input, Upload } from "@/components/ui"
import { FormModel } from "@/views/sales/ProductForm"
import { Field, FieldInputProps, FieldProps, FormikErrors, FormikProps, FormikTouched } from "formik";
import Navbar from "./footer/Navbar";

type FormFieldsName = {
    customer_code: string
    select_member: string
    ecommerce_operater: number
    customer_name: string
    legal_name: string
    sugar_license_number: string
}

type BasicInformationFields = {
    touched: FormikTouched<FormFieldsName>
    errors: FormikErrors<FormFieldsName>
}

const BasicInformationFields = (props: BasicInformationFields)=>{
    const {touched, errors} = props

    return <>
        <AdaptableCard divider className="mb-4">
            <h3 className="mb-8">Customer Master</h3>
            <div className="grid grid-cols-1"> 
                <div className="grid-col-1 flex gap-2">
                    <div className="w-60">  
                        <FormItem
                        label = "Customer Code"
                        invalid = {(errors.customer_code && touched.customer_code)}
                        errorMessage={errors.customer_code}
                        >
                            <Field
                                type = "text"
                                name = "customer_code"
                                placeholder = ""
                                component = {Input}
                            />
                        </FormItem>
                    </div>
                    <div className="ml-[37px] w-60">
                        <FormItem
                            label = "Select Member"
                            invalid = {(errors.select_member && touched.select_member)}
                            errorMessage={errors.select_member}
                        >
                        <Field
                            type = "text"
                            name = "select_member"
                            placeholder = ""
                            component = {Input}
                        />
                        </FormItem>
                    </div>
                    <div className="ml-[80px] w-60">
                        <FormItem
                            label = "E-Commerce Operator"
                            invalid = {(errors.ecommerce_operater && touched.ecommerce_operater)}
                            errorMessage={errors.ecommerce_operater}
                        >
                        <Field
                            type = "text"
                            name = "ecommerce_operater"
                            placeholder = ""
                            component = {Input}
                        />
                        </FormItem>
                    </div>
                </div>
                <div className="grid-col-1 flex gap-2">
                    <div className="w-60">  
                        <FormItem
                        label = "Customer Name"
                        invalid = {(errors.customer_name && touched.customer_name)}
                        errorMessage={errors.customer_name}
                        >
                            <Field
                                type = "text"
                                name = "customer_name"
                                placeholder = ""
                                component = {Input}
                            />
                        </FormItem>
                    </div>
                    <div className="ml-[37px] w-60">
                        <FormItem
                            label = "Legal Name"
                            invalid = {(errors.legal_name && touched.legal_name)}
                            errorMessage={errors.legal_name}
                        >
                        <Field
                            type = "text"
                            name = "legal_name"
                            placeholder = ""
                            component = {Input}
                        />
                        </FormItem>
                    </div>
                    <div className="ml-[80px] w-60">
                        <FormItem
                            label = "Sugar License Number"
                            invalid = {(errors.sugar_license_number && touched.sugar_license_number)}
                            errorMessage={errors.sugar_license_number}
                        >
                        <Field
                            type = "text"
                            name = "sugar_license_number"
                            placeholder = ""
                            component = {Input}
                        />
                        </FormItem>
                    </div>
                </div>
                <div className="grid-col-1">
                    <Navbar/>
                </div>
            </div>
        </AdaptableCard>
    </>
}

export default BasicInformationFields