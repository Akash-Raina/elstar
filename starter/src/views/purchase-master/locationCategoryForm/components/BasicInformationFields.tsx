import AdaptableCard from "@/components/shared/AdaptableCard"
import { FormItem, Input } from "@/components/ui"
import { Field, FormikErrors, FormikTouched } from "formik"
import { useRef } from "react"

type FormFieldsName = {
    code: number
    location_category: string
    location_type: string
    location_desc: string
    rout_throw_item: number
    revenue_center: string
    asset_life: string
    salvage_value: string
    depreciation_provision_gl:string
    accumulated_deprecation_gl:string
    accumulated_deprecation_account:string
    capitalization_gl:string
}

type BasicInformationFields = {
    touched: FormikTouched<FormFieldsName>
    errors: FormikErrors<FormFieldsName>
}

const BasicInformationFields = (props: BasicInformationFields)=>{
    const {touched, errors} = props

    return <>
        <AdaptableCard divider className="mb-4">
            <h3 className="mb-8">Add District Master</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4"> 
                <div className="col-span-1">
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
                <div className="col-span-1">  
                    <FormItem
                    label = "Location category"
                    invalid = {(errors.location_category && touched.location_category)}
                    errorMessage={errors.location_category}
                    >
                        <Field
                            type = "text"
                            name = "location_category"
                            placeholder = ""
                            component = {Input}
                        />
                    </FormItem>
                </div>
                <div className="col-span-1">  
                    <FormItem
                    label = "State"
                    invalid = {(errors.location_type && touched.location_type)}
                    errorMessage={errors.location_type}
                    >
                        <Field
                            type = "text"
                            name = "location_type"
                            placeholder = ""
                            component = {Input}
                        />
                    </FormItem>
                </div>
                <div className="col-span-3">  
                    <FormItem
                    label = "location desc"
                    invalid = {(errors.location_desc && touched.location_desc)}
                    errorMessage={errors.location_desc}
                    >
                        <Field
                            type = "text"
                            name = "location_desc"
                            placeholder = ""
                            component = {Input}
                        />
                    </FormItem>
                </div>
                <div className="col-span-2">  
                    <FormItem
                    label = "Route throw item master no"
                    invalid = {(errors.rout_throw_item && touched.rout_throw_item)}
                    errorMessage={errors.rout_throw_item}
                    >
                        <Field
                            type = "text"
                            name = "rout_throw_item"
                            placeholder = ""
                            component = {Input}
                        />
                    </FormItem>
                </div>
                <div className="col-span-1">  
                    <FormItem
                    label = "Revenue center"
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
                <div className="col-span-1">  
                    <FormItem
                    label = "Asset life"
                    invalid = {(errors.asset_life && touched.asset_life)}
                    errorMessage={errors.asset_life}
                    >
                        <Field
                            type = "text"
                            name = "asset_life"
                            placeholder = ""
                            component = {Input}
                        />
                    </FormItem>
                </div>
                <div className="col-span-1">  
                    <FormItem
                    label = "Salvage Value"
                    invalid = {(errors.salvage_value && touched.salvage_value)}
                    errorMessage={errors.salvage_value}
                    >
                        <Field
                            type = "text"
                            name = "salvage_value"
                            placeholder = ""
                            component = {Input}
                        />
                    </FormItem>
                </div>
                <div className="col-span-3">  
                    <FormItem
                    label = "Dereciation Provision GL"
                    invalid = {(errors.depreciation_provision_gl && touched.depreciation_provision_gl)}
                    errorMessage={errors.depreciation_provision_gl}
                    >
                        <Field
                            type = "text"
                            name = "depreciation_provision"
                            placeholder = ""
                            component = {Input}
                        />
                    </FormItem>
                </div>
                <div className="col-span-3">  
                    <FormItem
                    label = "Accumulated Deprecation GL"
                    invalid = {(errors.accumulated_deprecation_gl && touched.accumulated_deprecation_gl)}
                    errorMessage={errors.accumulated_deprecation_gl}
                    >
                        <Field
                            type = "text"
                            name = "accumulated_deprecation_gl"
                            placeholder = ""
                            component = {Input}
                        />
                    </FormItem>
                </div>
                <div className="col-span-3">  
                    <FormItem
                    label = "Accumulated_deprecation_account"
                    invalid = {(errors.accumulated_deprecation_account && touched.accumulated_deprecation_account)}
                    errorMessage={errors.accumulated_deprecation_account}
                    >
                        <Field
                            type = "text"
                            name = "accumulated_deprecation_account"
                            placeholder = ""
                            component = {Input}
                        />
                    </FormItem>
                </div>
                <div className="col-span-3">  
                    <FormItem
                    label = "Capitalization GL"
                    invalid = {(errors.capitalization_gl && touched.capitalization_gl)}
                    errorMessage={errors.capitalization_gl}
                    >
                        <Field
                            type = "text"
                            name = "capitalization_gl"
                            placeholder = ""
                            component = {Input}
                        />
                    </FormItem>
                </div>
            </div>
        </AdaptableCard>
    </>
}




export default BasicInformationFields