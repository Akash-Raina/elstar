import AdaptableCard from "@/components/shared/AdaptableCard"
import { FormItem, Input } from "@/components/ui"
import { Field, FormikErrors, FormikTouched } from "formik";

type FormFieldsName = {
    shipping_port_code: number
    shipping_port_desc: string
}

type BasicInformationFields = {
    touched: FormikTouched<FormFieldsName>
    errors: FormikErrors<FormFieldsName>
}

const BasicInformationFields = (props: BasicInformationFields)=>{
    const {touched, errors} = props

    return <>
        <AdaptableCard divider className="mb-4">
            <h3 className="mb-8">Shipping Port</h3>
            <div className="grid grid-cols-1"> 
                <div className="grid-col-1 flex gap-2">
                    <div className="w-60">  
                        <FormItem
                        label = "Shipping Port Code"
                        invalid = {(errors.shipping_port_code && touched.shipping_port_code)}
                        errorMessage={errors.shipping_port_code}
                        >
                            <Field
                                type = "text"
                                name = "shipping_port_code"
                                placeholder = ""
                                component = {Input}
                            />
                        </FormItem>
                    </div>
                    <div className="ml-[37px] w-60">
                        <FormItem
                            label = "Shipping Port Desc"
                            invalid = {(errors.shipping_port_desc && touched.shipping_port_desc)}
                            errorMessage={errors.shipping_port_desc}
                        >
                        <Field
                            type = "text"
                            name = "shipping_port_desc"
                            placeholder = ""
                            component = {Input}
                        />
                        </FormItem>
                    </div>
                    <div className="ml-[80px] w-60">
                        <FormItem
                            label = "Shipping Port Desc"
                            invalid = {(errors.shipping_port_desc && touched.shipping_port_desc)}
                            errorMessage={errors.shipping_port_desc}
                        >
                        <Field
                            type = "text"
                            name = "shipping_port_desc"
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