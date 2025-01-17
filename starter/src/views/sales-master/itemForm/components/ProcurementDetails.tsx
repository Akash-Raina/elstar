import { AdaptableCard } from "@/components/shared"
import { FormItem, Input, Select } from "@/components/ui"
import { Field, FieldProps, FormikErrors, FormikTouched } from "formik"

type FormFieldsName = {
    procurement_unit: string
    conversion_factor:string
    tariff_subheading:string
    name:string
}

type BasicInformationFields = {
    touched: FormikTouched<FormFieldsName>
    errors: FormikErrors<FormFieldsName>
}

export const ProcurememtDetails = (props: BasicInformationFields)=>{
    const {touched, errors} = props;
    return <>
        <AdaptableCard divider className="mb-4 border border-r-2 pr-3">
            <h3 className="mb-8">Procurement details</h3>
            <div className="grid grid-cols-1">
                <div className="grid-col-1 flex gap-2">
                    <div className="w-60">
                        <FormItem
                            label = "Procurement Unit "
                            invalid = {(errors.procurement_unit && touched.procurement_unit)}
                            errorMessage={errors.procurement_unit}
                        >
                        <Field
                                name = "procurement_unit"
                            >
                                {({field, form }: FieldProps)=>(
                                    <Select
                                    field={field}
                                    form={form}
                                    value={[]}
                                />
                                )}
                            </Field>
                        </FormItem>
                    </div>
                    <div className="ml-[37px] w-60">  
                    <FormItem
                    label = "Conversion factor"
                    invalid = {(errors.conversion_factor && touched.conversion_factor)}
                    errorMessage={errors.conversion_factor}
                    >
                        <Field
                            type = "text"
                            name = "conversion_factor"
                            placeholder = ""
                            component = {Input}
                        />
                    </FormItem>
                    </div>
                </div>

                <div className="grid-col-1 flex gap-2">
                    <div className="w-60">  
                            <FormItem
                            label = "Tariff Subheading"
                            invalid = {(errors.tariff_subheading && touched.tariff_subheading)}
                            errorMessage={errors.tariff_subheading}
                            >
                                <Field
                                name = "tariff_subheading"
                            >
                                {({field, form }: FieldProps)=>(
                                    <Select
                                    field={field}
                                    form={form}
                                    value={[]}
                                />
                                )}
                            </Field>
                            </FormItem>
                    </div>
                    <div className="ml-[37px] w-60">  
                        <FormItem
                            label = "Storing Unit"
                            invalid = {(errors.name && touched.name)}
                            errorMessage={errors.name}
                        >
                            <Field
                                name = "storing_unit"
                            >
                                {({field, form }: FieldProps)=>(
                                    <Select
                                        field={field}
                                        form={form}
                                        value={[]}
                                     />
                                )}
                            </Field>
                        </FormItem>
                    </div>
                </div>
            </div>
        </AdaptableCard>
    </>
}