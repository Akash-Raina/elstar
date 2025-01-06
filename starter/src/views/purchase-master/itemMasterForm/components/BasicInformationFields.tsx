import AdaptableCard from "@/components/shared/AdaptableCard"
import { FormItem, Input } from "@/components/ui"
import { Field, FormikErrors, FormikTouched } from "formik"
import { useRef } from "react"
import Navbar from "./footer/Navbar"


type FormFieldsName = {
    sub_group: number
    bin_card_no: number
    item_name: string
    extra_desc: string
    storing_unit: number
    ordering_unit: string
    conversing_factor: string
    storing_location: string
    opening_balance:string
    weight:string
    used_for:string
    maintain_sr_no:number
    prefix: string
}

type BasicInformationFields = {
    touched: FormikTouched<FormFieldsName>
    errors: FormikErrors<FormFieldsName>
}

const BasicInformationFields = (props: BasicInformationFields)=>{
    const {touched, errors} = props

    return <>
        <AdaptableCard divider className="mb-4">
            <h3 className="mb-8">Item Master</h3>
            <div className="grid grid-cols-1"> 
                <div className="grid-col-1 flex gap-2">
                    <div className="w-[240px] ">
                        <FormItem
                            label = "Sub Group"
                            invalid = {(errors.sub_group && touched.sub_group)}
                            errorMessage={errors.sub_group}
                        >
                        <Field
                            type = "text"
                            name = "sub_group"
                            placeholder = ""
                            component = {Input}
                        />
                        </FormItem>
                    </div>
                    <div className="w-[240px] ml-[26px]">  
                        <FormItem
                        label = "Item/Bin Card No"
                        invalid = {(errors.bin_card_no && touched.bin_card_no)}
                        errorMessage={errors.bin_card_no}
                        >
                            <Field
                                type = "text"
                                name = "bin_card_no"
                                placeholder = ""
                                component = {Input}
                            />
                        </FormItem>
                    </div>
                    <div className="w-[240px] ml-[26px]">  
                        <FormItem
                        label = "Item Name"
                        invalid = {(errors.item_name && touched.item_name)}
                        errorMessage={errors.item_name}
                        >
                            <Field
                                type = "text"
                                name = "item_name"
                                placeholder = ""
                                component = {Input}
                            />
                        </FormItem>
                    </div>
                    <div className=" flex items-center justify-center gap-2">
                        <input type="checkbox"  className="w-[27px] h-[23px]"/>
                        <label className="text-sm">Item</label>
                    </div>
                </div>
                <div className="grid-col-1 flex gap-2">
                    <div className="flex flex-col gap-2">
                        <div className="font-semibold">
                            Maintain Inventory
                        </div>
                        <div className="flex gap-2">
                            <div className="flex items-center justify-center gap-2">
                                <input type="checkbox" className="w-[27px] h-[23px]"/>
                                <label className="text-sm">Yes</label>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <input type="checkbox" className="w-[27px] h-[23px]"/>
                                <label className="text-sm">No</label>
                            </div>
                        </div>
                    </div>
                    <div className="ml-[133px] w-[240px]">  
                        <FormItem
                        label = "Extra desc"
                        invalid = {(errors.extra_desc && touched.extra_desc)}
                        errorMessage={errors.extra_desc}
                        >
                            <Field
                                type = "text"
                                name = "location_desc"
                                placeholder = ""
                                component = {Input}
                            />
                        </FormItem>
                    </div>
                    <div className="w-[240px] ml-[26px]">  
                        <FormItem
                        label = "Storing Unit"
                        invalid = {(errors.storing_unit && touched.storing_unit)}
                        errorMessage={errors.storing_unit}
                        >
                            <Field
                                type = "text"
                                name = "storing_unit"
                                placeholder = ""
                                component = {Input}
                            />
                        </FormItem>
                    </div>
                    <div className=" flex items-center justify-center gap-2 ">
                        <input type="checkbox"  className="w-[27px] h-[23px]"/>
                        <label className="text-sm">Not in Use</label>
                    </div>
                </div> 
                <div className="grid-col-1 flex gap-2">
                    <div className="w-[240px] ">
                        <FormItem
                            label = "Ordering Unit"
                            invalid = {(errors.ordering_unit && touched.ordering_unit)}
                            errorMessage={errors.ordering_unit}
                        >
                        <Field
                            type = "text"
                            name = "ordering_unit"
                            placeholder = ""
                            component = {Input}
                        />
                        </FormItem>
                    </div>
                    <div className="w-[240px] ml-[26px]">  
                        <FormItem
                        label = "Conversing Factor"
                        invalid = {(errors.conversing_factor && touched.conversing_factor)}
                        errorMessage={errors.conversing_factor}
                        >
                            <Field
                                type = "text"
                                name = "conversing_factor"
                                placeholder = ""
                                component = {Input}
                            />
                        </FormItem>
                    </div>
                    <div className="w-[240px] ml-[26px]">  
                        <FormItem
                        label = "Storing Location"
                        invalid = {(errors.storing_location && touched.storing_location)}
                        errorMessage={errors.storing_location}
                        >
                            <Field
                                type = "text"
                                name = "storing_location"
                                placeholder = ""
                                component = {Input}
                            />
                        </FormItem>
                    </div>
                </div>
                <div className="grid-col-1 flex gap-2">
                    <div className="flex flex-col gap-2">
                        <div className="font-semibold">
                            Quality Check Required
                        </div>
                        <div className="flex gap-2">
                            <div className="flex items-center justify-center gap-2">
                                <input type="checkbox" className="w-[27px] h-[23px]"/>
                                <label className=" text-sm">Yes</label>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <input type="checkbox" className="w-[27px] h-[23px]"/>
                                <label className="text-sm">No</label>
                            </div>
                        </div>
                    </div>
                    <div className="ml-[108px] w-[240px]">  
                        <FormItem
                        label = "Opening Balance"
                        invalid = {(errors.opening_balance && touched.opening_balance)}
                        errorMessage={errors.opening_balance}
                        >
                            <Field
                                type = "text"
                                name = "opening_balance"
                                placeholder = ""
                                component = {Input}
                            />
                        </FormItem>
                    </div>
                    <div className="flex flex-col gap-2 ml-[38px]">
                        <div className="font-semibold">
                            Req for sugar production
                        </div>
                        <div className="flex gap-2 ">
                            <div className="flex items-center justify-center gap-2">
                                <input type="checkbox" className="w-[27px] h-[23px]"/>
                                <label className="text-sm">Yes</label>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <input type="checkbox" className="w-[27px] h-[23px]"/>
                                <label className="text-sm">No</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid-col-1 flex gap-2">
                    <div className="w-[240px]">  
                        <FormItem
                        label = "Weigth"
                        invalid = {(errors.weight && touched.weight)}
                        errorMessage={errors.weight}
                        >
                            <Field
                                type = "text"
                                name = "weight"
                                placeholder = ""
                                component = {Input}
                            />
                        </FormItem>
                    </div>
                    <div className="flex flex-col gap-2 ml-[38px]">
                        <div className="font-semibold">
                            Seasonwise Stock
                        </div>
                        <div className="flex gap-2 ">
                            <div className="flex items-center justify-center gap-2">
                                <input type="checkbox" className="w-[27px] h-[23px]"/>
                                <label className="text-sm">Yes</label>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <input type="checkbox" className="w-[27px] h-[23px]"/>
                                <label className="text-sm">No</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid-col-1 flex gap-2">
                    <div className="w-[240px]">  
                        <FormItem
                        label = "Used For"
                        invalid = {(errors.used_for && touched.used_for)}
                        errorMessage={errors.used_for}
                        >
                            <Field
                                type = "text"
                                name = "used_for"
                                placeholder = ""
                                component = {Input}
                            />
                        </FormItem>
                    </div>
                    <div className="flex flex-col gap-2 ml-[38px]">
                        <div className="font-semibold">
                            Tendoring Required
                        </div>
                        <div className="flex gap-2 ">
                            <div className="flex items-center justify-center gap-2">
                                <input type="checkbox" className="w-[27px] h-[23px]"/>
                                <label className="text-sm">Yes</label>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <input type="checkbox" className="w-[27px] h-[23px]"/>
                                <label className="text-sm">No</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid-col-1 flex gap-2">
                    <div className="w-[240px] ">
                        <FormItem
                            label = "Maintain Sr No"
                            invalid = {(errors.maintain_sr_no && touched.maintain_sr_no)}
                            errorMessage={errors.maintain_sr_no}
                        >
                        <Field
                            type = "text"
                            name = "maintain_sr_no"
                            placeholder = ""
                            component = {Input}
                        />
                        </FormItem>
                    </div>
                    <div className="w-[240px] ml-[26px]">  
                        <FormItem
                        label = "Prefix"
                        invalid = {(errors.prefix && touched.prefix)}
                        errorMessage={errors.prefix}
                        >
                            <Field
                                type = "text"
                                name = "prefix"
                                placeholder = ""
                                component = {Input}
                            />
                        </FormItem>
                    </div>
                    <div className=" flex items-center justify-center ml-[26px]  gap-2">
                        <input type="checkbox"  className="w-[27px] h-[23px]"/>
                        <label className="text-sm">Item Sale Requirment</label>
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