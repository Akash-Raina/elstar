import { AdaptableCard } from "@/components/shared"
import { FormItem, Input, Select } from "@/components/ui"
import { Field, FieldProps, FormikTouched, FormikErrors } from "formik"
import CreatableSelect from "react-select/creatable"

type Options = {
    label: string
    value: string
}[]

type FormFieldsName = {
    categories: string
    tags: Options
    vendor: string
    brand: string
}

type OrganizationFieldsProps = {
    touched: FormikTouched<FormFieldsName>
    errors: FormikErrors<FormFieldsName>
    values: {
        categories: string
        tags: Options
        [key:string]:unknown
    }
}

const categories = [
    {label: 'Electronics', value: 'electronics'},
    {label: 'Footwear', value: 'footwear'},
    {label: 'Clothing', value: 'clothing'},
    {label: 'Home Appliances', value: 'home appliances'},
    {label: 'Furniture', value: 'furniture'},
    {label: 'Accessories', value: 'accessories'}
]

const tags = [
    { label: 'trend', value: 'trend' },
    { label: 'unisex', value: 'unisex' },
]

export const OrganizationFields = (props: OrganizationFieldsProps)=>{

    const { values = { categories: '', tags: [] }, touched, errors } = props


    return <AdaptableCard divider isLastChild className="mb-4">
        <h5>Organization</h5>
        <p className="mb-6">Section to config the product attribute</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-1">
                <FormItem
                    label="Category"
                    invalid={
                        (errors.categories && touched.categories) as boolean
                    }
                    errorMessage={errors.categories}
                >
                    <Field name = "categories">
                        {({field, form}:FieldProps)=>(
                            <Select
                                field={field}
                                form={form}
                                options={categories}
                                value={categories.filter(
                                    (category) =>
                                        category.value === values.categories
                                )}
                                onChange={(option)=>
                                    form.setFieldValue(
                                        field.name,
                                        option?.value
                                    )
                                }
                            />
                        )}
                    </Field>
                </FormItem>
            </div>
            <div className="col-span-1">
                    <FormItem
                        label="Tags"
                        invalid={
                            (errors.tags && touched.tags) as unknown as boolean
                        }
                        errorMessage={errors.tags as string}
                    >
                        <Field name="tags">
                            {({ field, form }: FieldProps) => (
                                
                                <Select
                                    isMulti
                                    componentAs={CreatableSelect}
                                    field={field}
                                    form={form}
                                    options={tags}
                                    value={tags}
                                    onChange={(option) =>
                                        form.setFieldValue(field.name, option)
                                    }
                                />
                                
                            )}
                        </Field>
                    </FormItem>
                </div>
            <div className="col-span-1">
                <FormItem
                    label="Brand"
                >
                    <Field
                        name= "brand"
                        type = "text"
                        placeholder = "Brand"
                        component = {Input}
                    />
                </FormItem>
            </div>
            <div className="col-span-1">
                <FormItem
                    label="Vendor"
                >
                    <Field
                        name = "vendor"
                        placeholder = "Vendor"
                        type = "text"
                        component = {Input}
                    />
                </FormItem>
            </div>
            
        </div>
    </AdaptableCard>
}