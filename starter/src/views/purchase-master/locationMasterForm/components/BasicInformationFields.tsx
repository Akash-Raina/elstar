import AdaptableCard from "@/components/shared/AdaptableCard"
import { FormItem, Input } from "@/components/ui"
import { Field, FormikErrors, FormikTouched } from "formik"

type FormFieldsName = {
    unit: number
    location_code: number
    code: number
    description: string
    description_percent: number
    asset_life: string
    salvage_value: string
}

type BasicInformationFields = {
    touched: FormikTouched<FormFieldsName>
    errors: FormikErrors<FormFieldsName>
}

const BasicInformationFields = (props: BasicInformationFields)=>{
    const {touched, errors} = props

    return <>
        <AdaptableCard divider className="mb-4">
            <h3 className="mb-8">Add Location master</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> 
                <div className="col-span-1">  
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
                <div className="col-span-1">
                    <FormItem
                        label = "location Code"
                        invalid = {(errors.location_code && touched.location_code)}
                        errorMessage={errors.location_code}
                    >
                    <Field
                        type = "text"
                        name = "location_code"
                        placeholder = ""
                        component = {Input}
                    />
                    </FormItem>
                </div>
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
                        label = "Description"
                        invalid = {(errors.description && touched.description)}
                        errorMessage={errors.description}
                    >
                    <Field
                        type = "text"
                        name = "description"
                        placeholder = ""
                        component = {Input}
                    />
                    </FormItem>
                </div>
                <div className="col-span-1">
                    <FormItem
                        label = "Description Percent"
                        invalid = {(errors.description_percent && touched.description_percent)}
                        errorMessage={errors.description_percent}
                    >
                    <Field
                        type = "text"
                        name = "description_percent"
                        placeholder = ""
                        component = {Input}
                    />
                    </FormItem>
                </div>
                <div className="col-span-1">
                    <FormItem
                        label = "Asset Life "
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
                        label = "salvage value"
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
                <div className="col-span-1 flex justify-start items-center gap-2">
                    <input
                        type = "checkbox"
                        className="w-4 h-4"
                    />
                    <label className="h-5 font-semibold text-base">Depreciation Calculation</label>
                </div>
            </div>
        </AdaptableCard>
    </>
}

export default BasicInformationFields