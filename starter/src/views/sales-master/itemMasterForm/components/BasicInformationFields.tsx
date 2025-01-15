import AdaptableCard from "@/components/shared/AdaptableCard"
import {FormItem, Input } from "@/components/ui"
import { Field, FormikErrors, FormikTouched } from "formik";
import { useState } from "react";
import { Godown } from "./footer/Godown";
import { OtherDetails } from "./footer/OtherDetails";
import { Procurrent } from "./footer/Procurrent";

type FormFieldsName = {
    item_name: string
    extra_desc: string
    conversing_factor: string
    storing_unit: string
    ordering_unit: string
    storing_location: string
    weight: string
    unit: string
    hsn_code: string
}

type BasicInformationFields = {
    touched: FormikTouched<FormFieldsName>
    errors: FormikErrors<FormFieldsName>
}

const Navbar = () => {
  const [activeTab, setActiveTab] = useState<"godown" | "Procurrent Details" | "Other Details" | null>("godown");

  const tabs = [
    { label: "Godown", key: "godown", component: <Godown/>},
    { label: "Procurrent Details", key: "procurrent", component: <Procurrent/>},
    { label: "Other Details", key: "other", component: <OtherDetails/>},
  ];

  return (
    <div className="flex flex-col border-[#787878] rounded-sm border items-center w-[80%]">
      <div className="flex gap-2 w-full border-[#787878] border-b h-10 items-center justify-around font-semibold cursor-pointer">
        {tabs.map((tab) => (
          <span
            key={tab.key}
            className={`${activeTab === tab.key ? "text-red-500" : ""}`}
            onClick={() => setActiveTab(tab.key as "godown" | "Procurrent Details" | "Other Details" | null)}
          >
            {tab.label}
          </span>
        ))}
      </div>

      <div className="w-full ">
        {tabs.find((tab) => tab.key === activeTab)?.component || null}
      </div>
    </div>
  );
};

const BasicInformationFields = (props: BasicInformationFields)=>{
    const {touched, errors} = props

    return <>
        <AdaptableCard divider className="mb-4">
            <h3 className="mb-8">Add Item Master</h3>
            <div className="grid grid-cols-1"> 
                <div className="grid-col-1 flex gap-2">
                    <div className=" flex gap-2 mb-4 items-center">
                        <div className="text-lg font-semibold text-black">Maintain Inventory</div>
                        <div className="flex ml-5 gap-3 font-semibold text-black">
                            <input type="checkbox"  className="w-[27px] h-[23px]"/>
                            <label>Yes</label>
                            
                            <input type="checkbox"  className="w-[27px] h-[23px]"/>
                            <label>No</label>
                        </div>
                    </div>
                </div>
                <div className="grid-col-1 flex gap-2">
                    <div className="w-60">  
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
                    <div className="ml-[37px] w-60">
                        <FormItem
                            label = "Extra Desc"
                            invalid = {(errors.extra_desc && touched.extra_desc)}
                            errorMessage={errors.extra_desc}
                        >
                        <Field
                            type = "text"
                            name = "extra_desc"
                            placeholder = ""
                            component = {Input}
                        />
                        </FormItem>
                    </div>
                    <div className="ml-[37px] w-60">
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
                </div>
                <div className="grid-col-1 flex gap-2">              
                    <div className="w-60">
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
                    <div className="ml-[37px] w-60">
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
                    <div className="ml-[37px] w-60">
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
                    <div className="w-60">
                        <FormItem
                            label = "Weight"
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
                    <div className="ml-[37px] flex gap-2 mb-4 items-center">
                        <div className="text-lg font-semibold text-black">Quality Check Required</div>
                        <div className="flex ml-[67px] gap-3 font-semibold text-black">
                            <input type="checkbox"  className="w-[27px] h-[23px]"/>
                            <label>Yes</label>
                            
                            <input type="checkbox"  className="w-[27px] h-[23px]"/>
                            <label>No</label>
                        </div>
                    </div>
                </div>
                <div className="grid-col-1 flex gap-2">
                    <div className="w-60">
                        <FormItem
                            label = "Unit"
                            invalid = {(errors.unit && touched.unit)}
                            errorMessage={errors.unit}
                        >
                            <Field
                                type = "text"
                                name = "unit"
                                placeholder = ""
                                component = {Input}
                            />
                        </FormItem>
                    </div>
                    <div className="ml-[37px] flex gap-2 mb-4 items-center">
                        <div className="text-lg font-semibold text-black">Seasonwise Stock</div>
                        <div className="flex ml-[110px] gap-3 font-semibold text-black">
                            <input type="checkbox"  className="w-[27px] h-[23px]"/>
                            <label>Yes</label>
                            
                            <input type="checkbox"  className="w-[27px] h-[23px]"/>
                            <label>No</label>
                        </div>
                    </div>
                </div>
                <div className="grid-col-1 flex gap-2">                    
                    <div className="w-60">
                        <FormItem
                            label = "HSN Code"
                            invalid = {(errors.hsn_code && touched.hsn_code)}
                            errorMessage={errors.hsn_code}
                        >
                            <Field
                                type = "text"
                                name = "hsn_code"
                                placeholder = ""
                                component = {Input}
                            />
                        </FormItem>
                    </div>
                    <div className="ml-[37px] flex gap-2 mb-4 items-center">
                        <div className="text-lg font-semibold text-black">Tendering Code</div>
                        <div className="flex ml-[130px] gap-3 font-semibold text-black">
                            <input type="checkbox"  className="w-[27px] h-[23px]"/>
                            <label>Yes</label>
                            
                            <input type="checkbox"  className="w-[27px] h-[23px]"/>
                            <label>No</label>
                        </div>
                    </div>
                </div>
                <Navbar/>
            </div>
        </AdaptableCard>
    </>
}

export default BasicInformationFields