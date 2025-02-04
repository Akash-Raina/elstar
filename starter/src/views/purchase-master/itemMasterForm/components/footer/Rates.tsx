import { FormItem, Input } from "@/components/ui"
import { Field } from "formik"

export const Rates = ()=>{
    return <div className="w-full">
    <div className="flex flex-col mt-[17px] w-full"> 
        <div className="flex ml-[31px]">
            <div className="w-[241px]">
                <FormItem
                    label = "Purchase Rate"
                >
                    <Field
                        type = "text"
                        name = "purchase_rate"
                        placeholder = ""
                        component = {Input}
                    />
                </FormItem>
            </div>
            <div className="flex w-[241px] ml-[65px]">
                <FormItem
                    label = "Terrif Subheading"
                >
                    <Field
                        type = "text"
                        name = "terrif_subheading"
                        placeholder = ""
                        component = {Input}
                    />
                </FormItem>
            </div>
        </div>
        <div className="flex w-[241px] ml-[31px]">
            <FormItem
                label = "Sales Rate"
            >
                <Field
                    type = "text"
                    name = "sales_rate"
                    placeholder = ""
                    component = {Input}
                />
            </FormItem>
        </div>
    </div></div>
}