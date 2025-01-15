import { FormItem, Input } from "@/components/ui"
import { Field } from "formik"

export const Procurrent = ()=>{

    return <div className="w-full">
    <div className="flex flex-col mt-[17px] ml-[31px]">
        <div className="w-[241px]">
            <FormItem
                label = "Procurement Unit"
            >
                <Field
                    type = "text"
                    name = "procurement_unit"
                    placeholder = ""
                    component = {Input}
                />
            </FormItem>
        </div>
        <div className="flex w-[241px] ">
            <FormItem
                label = "Conversing Factor"
            >
                <Field
                    type = "text"
                    name = "conversing_factor"
                    placeholder = ""
                    component = {Input}
                />
            </FormItem>
        </div>
    </div>
    </div>
}