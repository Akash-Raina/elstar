import { AdaptableCard, FormNumericInput } from "@/components/shared"
import { FormItem, Input, InputProps } from "@/components/ui"
import { Field, FieldInputProps, FieldProps, FormikErrors, FormikTouched } from "formik"
import { ComponentType } from "react"
import { NumericFormat, NumericFormatProps } from "react-number-format"

type FormFieldsName = {
    sku: string
    price: number
    discount: number
    tax: number
}

type PricingFieldsProps = {
    touched: FormikTouched<FormFieldsName>
    errors: FormikErrors<FormFieldsName>
}

const PriceInput = (props: InputProps) => {
    return <Input {...props} value={props.field.value} prefix="Rs." />
}

// const NumberInput = (props: InputProps) => {
//     return <Input {...props} value={props.field.value} />
// }

const TaxRateInput = (props: InputProps) => {
    return <Input {...props} value={props.field.value} />
}

const NumericFormatInput = ({onValueChange, ...rest}: Omit<NumericFormatProps, 'form'> & {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    form: any
    field: FieldInputProps<unknown>
})=>{
    return(
        <NumericFormat
            customInput={Input as ComponentType}
            type="text"
            autoComplete="off"
            onValueChange={onValueChange}
            {...rest}
        />
    )
}

const PricingFields = (props: PricingFieldsProps)=>{

    const {touched, errors} = props

    return <>
        <AdaptableCard divider className="mb-4">
            <h5>Pricing</h5>
            <p className="mb-6">Section to config product sales</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="col-span-1"> 
                    <FormItem
                        label="SKU"
                        invalid={(errors.sku && touched.sku) as boolean}
                        errorMessage={errors.sku}
                    >
                        <Field type="text" placeholder = "stock" name = "sku" component = {Input}>
                            {/* {({field, form}: FieldProps)=>{
                                return(
                                    <FormNumericInput
                                    form={form}
                                    field={field}
                                    placeholder="stock"
                                    customInput={
                                        NumberInput as ComponentType
                                    }
                                    onValueChange={(e) => {
                                        form.setFieldValue(
                                            field.name,
                                            e.value
                                        )
                                    }}
                                    />
                                    
                                )
                            }} */}
                        </Field>
                    </FormItem>
                </div>
                <div className="col-span-1">
                    <FormItem
                        label="Price"
                        invalid={(errors.price && touched.price) as boolean}
                        errorMessage={errors.price}
                    >
                        <Field name="price">
                            {({field, form}: FieldProps) => {
                                return(
                                    <FormNumericInput
                                    form={form}
                                    field={field}
                                    placeholder="Price"
                                    customInput={
                                        PriceInput as ComponentType
                                    }
                                    onValueChange={(e) => {
                                        form.setFieldValue(
                                            field.name,
                                            e.value
                                        )
                                    }}/>
                                )
                            }}
                        </Field>
                    </FormItem>
                </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="col-span-1">
                    <FormItem
                        label="Bulk Discount Price"
                        invalid={
                            (errors.discount &&
                                touched.discount) as boolean
                        }
                        errorMessage={errors.discount}
                    >
                        <Field name="discount">
                            {({ field, form }: FieldProps) => {
                                return (
                                    <NumericFormatInput
                                        form={form}
                                        field={field}
                                        placeholder="Bulk Discount Price"
                                        customInput={
                                            PriceInput as ComponentType
                                        }
                                        onValueChange={(e) => {
                                            form.setFieldValue(
                                                field.name,
                                                e.value
                                            )
                                        }}
                                    />
                                )
                            }}
                        </Field>
                    </FormItem>
                </div>
                <div className="col-span-1">
                    <FormItem
                        label="Tax Rate(%)"
                    >
                        <Field name="tax">
                            {({ field, form }: FieldProps) => {
                                return (
                                    <NumericFormatInput
                                        form={form}
                                        field={field}
                                        value={6}
                                        placeholder="Tax Rate"
                                        customInput = {
                                            TaxRateInput as ComponentType
                                        }
                                        isAllowed={({ floatValue }) =>
                                            (floatValue as number) <= 100
                                        }
                                        onValueChange={(e) => {
                                            form.setFieldValue(
                                                field.name,
                                                e.value
                                            )
                                        }}
                                    />
                                )
                            }}
                        </Field>
                    </FormItem>
                </div>
                <div className="col-span-1">
                    {/* <FormItem
                        label="Status"
                    >
                        <Field>
                            
                        {({field, form}: FieldProps)=>(
                            <Select
                                options={[{label: 'Active', value: '0'}, {label: "Inactive", value: "1"}]}
                            />
                            
                        )}
                        </Field>
                    </FormItem> */}
                </div>
            </div>
        </AdaptableCard>
    </>
}

export default PricingFields