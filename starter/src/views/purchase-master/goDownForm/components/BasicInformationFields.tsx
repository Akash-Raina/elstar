import AdaptableCard from "@/components/shared/AdaptableCard"
import { FormItem, Input, Select } from "@/components/ui"
import { Field, FieldProps, FormikErrors, FormikTouched } from "formik"

type FormFieldsName = {
    go_down_code: number
    go_down_name: string
    revenue_center: string
    storing_capacity: string
    item: string
}

type BasicInformationFields = {
    touched: FormikTouched<FormFieldsName>
    errors: FormikErrors<FormFieldsName>
}

const options = [{label: "Sugar", value: 0}]

const BasicInformationFields = (props: BasicInformationFields)=>{
    const {touched, errors} = props

    return <>
        <AdaptableCard divider className="mb-4">
            <h3 className="mb-8">Add Main Group  </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4"> 
                <div className="col-span-1">
                    <FormItem
                        label = "Code"
                        invalid = {(errors.go_down_code && touched.go_down_code)}
                        errorMessage={errors.go_down_code}
                    >
                    <Field
                        type = "text"
                        name = "go_down_code"
                        placeholder = ""
                        component = {Input}
                    />
                    </FormItem>
                </div>
                <div className="col-span-1">  
                    <FormItem
                    label = "Name"
                    invalid = {(errors.go_down_name && touched.go_down_name)}
                    errorMessage={errors.go_down_name}
                    >
                        <Field
                            type = "text"
                            name = "go_down_name"
                            placeholder = ""
                            component = {Input}
                        />
                    </FormItem>
                </div>
                <div className="col-span-1">
                <FormItem
                    label = "Revenue Center"
                    invalid = {(errors.revenue_center && touched.revenue_center)}
                    errorMessage={errors.revenue_center}
                    >
                        <Field
                            name = "revenue_center"
                        >
                            {({field, form }: FieldProps)=>(
                                <Select
                                field={field}
                                form={form}
                                value={options}
                            />
                            )}
                        </Field>
                </FormItem>
                </div>
                <div className="col-span-1">
                    <FormItem
                        label = "Storing Capacity"
                        invalid = {(errors.storing_capacity && touched.storing_capacity)}
                        errorMessage={errors.storing_capacity}
                    >
                    <Field
                        type = "text"
                        name = "storing_capacity"
                        placeholder = ""
                        component = {Input}
                    />
                    </FormItem>
                </div>
                <div className="col-span-1">
                    <FormItem
                        label = "Item"
                        invalid = {(errors.item && touched.item)}
                        errorMessage={errors.item}
                    >
                    <Field
                        name = "item"
                    >
                        {({field, form }: FieldProps)=>(
                                <Select
                                field={field}
                                form={form}
                                value={[{label: "ACRE", value: 1}]}
                            />
                            )}
                    </Field>
                    </FormItem>
                </div>
                <div className="col-span-1 flex justify-center items-center gap-2">
                    <Field
                        type = "checkbox"
                        className="w-4 h-4"
                    />
                    <label className="h-5 font-semibold text-base">Single item godown</label>
                </div>
            </div>
        </AdaptableCard>
    </>
}

export default BasicInformationFields