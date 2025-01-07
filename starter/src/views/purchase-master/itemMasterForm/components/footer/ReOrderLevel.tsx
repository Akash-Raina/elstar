import { FormItem, Input } from "@/components/ui"
import { Field } from "formik"

export const ReOrderLevel = ()=>{


    return <div className="w-full">
    <div className="flex flex-col mt-[17px] w-full"> 
        <div className="flex ml-[31px]">
            <div className="w-[241px]">
                <FormItem
                    label = "Minimum Stock"
                >
                    <Field
                        type = "text"
                        name = "minimum_stock"
                        placeholder = ""
                        component = {Input}
                    />
                </FormItem>
            </div>
            <div className="flex w-[241px] ml-[65px]">
                <FormItem
                    label = "Re-order level stock"
                >
                    <Field
                        type = "text"
                        name = "reorder_level"
                        placeholder = ""
                        component = {Input}
                    />
                </FormItem>
            </div>
        </div>
        <div className="flex w-[241px] ml-[31px]">
            <FormItem
                label = "Maximum Stock"
            >
                <Field
                    type = "text"
                    name = "maximum_stock"
                    placeholder = ""
                    component = {Input}
                />
            </FormItem>
        </div>
    </div></div>
}