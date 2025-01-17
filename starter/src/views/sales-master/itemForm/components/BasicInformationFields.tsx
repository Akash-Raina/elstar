import AdaptableCard from "@/components/shared/AdaptableCard"
import { FormItem, Input, Select } from "@/components/ui"
import { Field, FieldProps, FormikErrors, FormikTouched } from "formik"

type FormFieldsName = {
    product_type: string
    code: string
    item_name: string
    description: string
    storing_unit: string
    ordering_unit:string
    conversing_factor:string
    storing_location:string
    weight:string
    weight_unit: string
    unit: string
    hsn_code:string
    godown:string
    opening_balance:string
}

type BasicInformationFields = {
    touched: FormikTouched<FormFieldsName>
    errors: FormikErrors<FormFieldsName>
}

const options = [{label: "Product", value: 0}, {label: 'By Product', value: 1}]
const unit_options = [{label: "QTL", value: 0}]

const BasicInformationFields = (props: BasicInformationFields)=>{

    const {touched, errors} = props;

    return <>
        <AdaptableCard divider className="mb-4">
            <h3 className="mb-8">Add Item</h3>
            <div className="grid grid-cols-1"> 
                <div className="grid-col-1 flex gap-2">
                    <div className="w-60">
                        <FormItem
                            label = "Product type"
                            invalid = {(errors.product_type && touched.product_type)}
                            errorMessage={errors.product_type}
                        >
                        <Field
                                name = "product_type"
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
                    <div className="ml-[37px] w-60">  
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
                    label = "Item name"
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
                </div>
                
                <div className="grid-col-1 flex gap-2">
                    <div className="w-60">  
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
                    <div className="ml-[37px] w-60">  
                        <FormItem
                        label = "Storing Unit"
                        invalid = {(errors.storing_unit && touched.storing_unit)}
                        errorMessage={errors.storing_unit}
                        >
                            <Field
                                name = "storing_unit"
                            >
                                {({field, form }: FieldProps)=>(
                                    <Select
                                        field={field}
                                        form={form}
                                        value={unit_options}
                                    />
                                )}
                            </Field>
                        </FormItem>
                    </div>
                    <div className="ml-[37px] w-60">  
                        <FormItem
                        label = "Ordering Unit"
                        invalid = {(errors.ordering_unit && touched.ordering_unit)}
                        errorMessage={errors.ordering_unit}
                        >
                            <Field
                                name = "ordering_unit"
                            >
                                {({field, form }: FieldProps)=>(
                                    <Select
                                        field={field}
                                        form={form}
                                        value={unit_options}
                                    />
                                )}
                            </Field>
                        </FormItem>
                    </div>
                </div>
                
                <div className="grid-col-1 flex gap-2">
                    <div className="w-60">  
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
                    <div className="ml-[37px] w-24 mt-7 flex gap-2"> 
                        <FormItem
                            label = ""
                            invalid = {(errors.weight_unit && touched.weight_unit)}
                            errorMessage={errors.weight_unit}
                        >
                        <Field
                                name = "weight_unit"
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
                        <span className="mt-4 font-semibold">Unit</span>
                    </div> 
                    <div className="ml-[37px] flex flex-col gap-5">
                        
                            <div className="flex ml-[67px] gap-3 font-semibold text-black">
                                <div className="text-lg font-semibold text-black">Quality Check Required</div>
                                <input type="checkbox"  className="w-[27px] h-[23px]"/>
                                <label>Yes</label>
                                
                                <input type="checkbox"  className="w-[27px] h-[23px]"/>
                                <label>No</label>
                            </div>
                            <div className="flex ml-[67px] gap-3 font-semibold text-black">
                                <div className="text-lg font-semibold text-black">Seasonwise Stock</div>
                                <input type="checkbox"  className="w-[27px] h-[23px] ml-11"/>
                                <label>Yes</label>
                                
                                <input type="checkbox"  className="w-[27px] h-[23px]"/>
                                <label>No</label>
                            </div>   
                            <div className="flex ml-[67px] gap-3 font-semibold text-black">
                                <div className="text-lg font-semibold text-black">Tendering Code</div>
                                <input type="checkbox"  className="w-[27px] h-[23px] ml-16"/>
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
                                name = "product_type"
                            >
                                {({field, form }: FieldProps)=>(
                                    <Select
                                    field={field}
                                    form={form}
                                    value={[{label: "Sales", value: 0}]}
                                />
                                )}
                            </Field>
                            </FormItem>
                    </div>
                </div>

                <div className="grid-col-1 flex gap-2">
                    <div className=" w-60">  
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
                    <div className="ml-[37px] w-60">
                        <FormItem
                            label = "Godown"
                            invalid = {(errors.godown && touched.godown)}
                            errorMessage={errors.godown}
                        >
                        <Field
                                name = "godown"
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
                </div>
            </div>
        </AdaptableCard>    
    </>
}

export default BasicInformationFields