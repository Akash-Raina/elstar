import { FormItem, Input } from "@/components/ui"
import { Field } from "formik"

export const OtherDetails = ()=>{


    return <div className="w-full">
        <div className="flex flex-col mt-[17px] ml-[31px]">
            <div className="w-[241px] flex">
                <FormItem
                    label = "Standard Consumption Rate"
                >
                    <Field
                        type = "text"
                        name = "standard_rate"
                        placeholder = ""
                        component = {Input}
                    />
                </FormItem>
            </div>
            <div className="flex w-[241px] ">
                <FormItem
                    label = "Old Bincard No"
                >
                    <Field
                        type = "text"
                        name = "old_bincard"
                        placeholder = ""
                        component = {Input}
                    />
                </FormItem>
            </div>
        </div>
    </div>
}