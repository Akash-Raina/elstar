import { FormItem, Input } from "@/components/ui"
import { Field } from "formik"

export const Rates = ()=>{
    return <div className="w-full">
    <div className="flex mt-[17px] ml-[17px] w-full"> 
        <div className="w-[498px]">
            <FormItem
                label = "Address"
            >
                <Field
                    type = "text"
                    name = "address"
                    placeholder = ""
                    component = {Input}
                />
            </FormItem>
        </div>
        <div className="flex w-[241px] ml-[40px]">
            <FormItem
                label = "Phone No"
            >
                <Field
                    type = "text"
                    name = "phone_no"
                    placeholder = ""
                    component = {Input}
                />
            </FormItem>
        </div>
    </div></div>
}