import { FormItem, Input } from "@/components/ui"
import { Field } from "formik"

export const WorkAd = ()=>{


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
                <div className="w-[241px] ml-[40px]">
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
            </div>
            <div className="flex  ml-[17px] w-full"> 
                <div className="w-[498px]">
                    <FormItem
                        label = "District"
                    >
                        <Field
                            type = "text"
                            name = "district"
                            placeholder = ""
                            component = {Input}
                        />
                    </FormItem>
                </div>
                <div className="w-[241px] ml-[40px]">
                    <FormItem
                        label = "Fax"
                    >
                        <Field
                            type = "text"
                            name = "phone_no"
                            placeholder = ""
                            component = {Input}
                        />
                    </FormItem>
                </div>
            </div>
            <div className="flex  ml-[17px] w-full"> 
                <div className="w-[498px]">
                    <FormItem
                        label = "State"
                    >
                        <Field
                            type = "text"
                            name = "state"
                            placeholder = ""
                            component = {Input}
                        />
                    </FormItem>
                </div>
                <div className="w-[241px] ml-[40px]">
                    <FormItem
                        label = "Extn"
                    >
                        <Field
                            type = "text"
                            name = "phone_no"
                            placeholder = ""
                            component = {Input}
                        />
                    </FormItem>
                </div>
            </div>
            <div className="flex  ml-[17px] w-full"> 
                <div className="w-[498px]">
                    <FormItem
                        label = "Country"
                    >
                        <Field
                            type = "text"
                            name = "country"
                            placeholder = ""
                            component = {Input}
                        />
                    </FormItem>
                </div>
                <div className="w-[241px] ml-[40px]">
                    <FormItem
                        label = "Email"
                    >
                        <Field
                            type = "text"
                            name = "email"
                            placeholder = ""
                            component = {Input}
                        />
                    </FormItem>
                </div>
            </div>
            <div className="flex  ml-[17px] w-full"> 
                <div className="w-[498px]">
                    <FormItem
                        label = "Pin Code"
                    >
                        <Field
                            type = "text"
                            name = "pincode"
                            placeholder = ""
                            component = {Input}
                        />
                    </FormItem>
                </div>
                <div className="w-[241px] ml-[40px]">
                    <FormItem
                        label = "Mobile"
                    >
                        <Field
                            type = "mobile"
                            name = "mobile"
                            placeholder = ""
                            component = {Input}
                        />
                    </FormItem>
                </div>
            </div>
    </div>
}