import AdaptableCard from "@/components/shared/AdaptableCard"
import { Button, FormItem, Input } from "@/components/ui"
import { Field, FormikErrors, FormikTouched } from "formik";
import { useState } from "react";

type FormFieldsName = {
    code: string
    name: string
    revenue_center: string
    credit_gl_code: number
    legal_name: string
    sugar_license_number: number
    godown_location: string
    godown_address: string
    godown_state: string
    storing_capacity: string
}

type BasicInformationFields = {
    touched: FormikTouched<FormFieldsName>
    errors: FormikErrors<FormFieldsName>
}

const Navbar = () => {
  const [activeTab, setActiveTab] = useState<"code" | "godownname" | "godownstate" | "revenue"| null>("code");

  const tabs = [
    { label: "Code", key: "code", component: ''},
    { label: "Godown Name", key: "godownname", component: ''},
    { label: "Godown State", key: "godownstate", component: ''},
    { label: "Revenue", key: "revenue", component:''},
  ];

  return (
    <div className="flex flex-col border-[#787878] rounded-sm border items-center">
      <div className="flex gap-2 w-full border-[#787878] border-b h-10 items-center justify-around font-semibold cursor-pointer">
        {tabs.map((tab) => (
          <span
            key={tab.key}
            className={`${activeTab === tab.key ? "text-red-500" : ""}`}
            onClick={() => setActiveTab(tab.key as "code" | "godownname" | "godownname" | "revenue"| null)}
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
            <h3 className="mb-8">Godown</h3>
            <div className="grid grid-cols-1"> 
                <div className="grid-col-1 flex gap-2">
                    <div className="w-60">  
                        <FormItem
                        label = "Code"
                        invalid = {(errors.code && touched.code)}
                        errorMessage={errors.code}
                        >
                            <Field
                                type = "text"
                                name = "code"
                                placeholder = ""
                                component = {Input}
                            />
                        </FormItem>
                    </div>
                    <div className="ml-[37px] w-60">
                        <FormItem
                            label = "Name"
                            invalid = {(errors.name && touched.name)}
                            errorMessage={errors.name}
                        >
                        <Field
                            type = "text"
                            name = "name"
                            placeholder = ""
                            component = {Input}
                        />
                        </FormItem>
                    </div>
                    <div className="ml-[37px] w-60">
                        <FormItem
                            label = "Revenue Center"
                            invalid = {(errors.revenue_center && touched.revenue_center)}
                            errorMessage={errors.revenue_center}
                        >
                        <Field
                            type = "text"
                            name = "revenue_center"
                            placeholder = ""
                            component = {Input}
                        />
                        </FormItem>
                    </div>
                </div>
                <div className="grid-col-1 flex gap-2">              
                    <div className="w-60">
                        <FormItem
                            label = "Credit GL Code"
                            invalid = {(errors.credit_gl_code && touched.credit_gl_code)}
                            errorMessage={errors.credit_gl_code}
                        >
                        <Field
                            type = "text"
                            name = "credit_gl_code"
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
                <div className="grid-col-1 flex gap-2">              
                    <div className="w-60">
                        <FormItem
                            label = "Godown Location"
                            invalid = {(errors.godown_location && touched.godown_location)}
                            errorMessage={errors.godown_location}
                        >
                        <Field
                            type = "text"
                            name = "godown_location"
                            placeholder = ""
                            component = {Input}
                        />
                        </FormItem>
                    </div>
                    <div className="ml-[37px] w-60">
                        <FormItem
                            label = "Godown Address"
                            invalid = {(errors.godown_address && touched.godown_address)}
                            errorMessage={errors.godown_address}
                        >
                            <Field
                                type = "text"
                                name = "godown_address"
                                placeholder = ""
                                component = {Input}
                            />
                        </FormItem>
                    </div>
                    <div className="ml-[80px] w-60">
                        <FormItem
                            label = "Godown State"
                            invalid = {(errors.godown_state && touched.godown_state)}
                            errorMessage={errors.godown_state}
                        >
                            <Field
                                type = "text"
                                name = "godown_state"
                                placeholder = ""
                                component = {Input}
                            />
                        </FormItem>
                    </div>
                </div>
                <div className="grid-col-1 flex gap-2">
                    <div className=" w-60">
                        <FormItem
                            label = "Godown State"
                            invalid = {(errors.godown_state && touched.godown_state)}
                            errorMessage={errors.godown_state}
                        >
                            <Field
                                type = "text"
                                name = "godown_state"
                                placeholder = ""
                                component = {Input}
                            />
                        </FormItem>
                    </div>
                </div>
                <div className=" flex gap-2 mb-4">
                    <input type="checkbox"  className="w-[27px] h-[23px]"/>
                    <label className="text-lg font-semibold text-black">Single item Godown</label>
                </div>
                <Navbar/>
            </div>
        </AdaptableCard>
    </>
}

export default BasicInformationFields