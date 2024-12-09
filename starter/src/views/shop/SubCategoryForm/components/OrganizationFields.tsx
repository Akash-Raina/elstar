import { AdaptableCard } from "@/components/shared"
import { FormItem, Select } from "@/components/ui"
import { injectReducer, useAppDispatch } from "@/store"
import { Field, FieldProps, FormikErrors, FormikTouched } from "formik"
import reducer, { getCategoryOptions, useAppSelector } from "../store"
import { useEffect } from "react"

injectReducer('subCategoryFormSlice', reducer)

type FormFieldName = {
    category: string
}

type SubCategoryFieldsProps = {
    touched: FormikTouched<FormFieldName>
    errors: FormikErrors<FormFieldName>
    values: {
        category: string,
        status: string
    }
}

const status = [
    {label: 'Active', value: 0}, 
    {label: 'Inactive', value: 1}
]

export const OrganizationFields = (props: SubCategoryFieldsProps) =>{

    const {
        values = { category: '', status:'' },
        touched,
        errors,
    } = props



    const dispatch = useAppDispatch()
    
    const {categoryOptions} = useAppSelector(
        (state: any) => state.subCategoryFormSlice.data
    )

    useEffect(() => {
        dispatch(getCategoryOptions())
    }, [dispatch])

    return (
        <AdaptableCard>
            <h5>Organization</h5>
            <p className="mb-6">Section to config the product attribute</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="col-span-1">
                    <FormItem
                        label="Category"
                        invalid={
                            (errors.category && touched.category) as boolean
                        }
                        errorMessage={errors.category}
                    >
                        <Field name="category">
                            {({ field, form }: FieldProps) => (
                                <Select
                                    field={field}
                                    form={form}
                                    options={categoryOptions}
                                    value={values.category}
                                    onChange={(option) => {
                                        form.setFieldValue(field.name, option)
                                    }}
                                />
                            )}
                        </Field>
                    </FormItem>
                </div>
                <div className="col-span-1">
                    <FormItem
                        label="Status"
                        invalid={
                            (errors.category && touched.category) as boolean
                        }
                        errorMessage={errors.category}
                    >
                        <Field name="status">
                            {({ field, form }: FieldProps) => (
                                <Select
                                    field={field}
                                    form={form}
                                    options={status}
                                    value={status.filter(
                                        (current)=> current.value === values.status
                                    )}
                                    onChange={(option) => {
                                        form.setFieldValue(field.name, option?.value)
                                    }}
                                />
                            )}
                        </Field>
                    </FormItem>
                </div>
            </div>
        </AdaptableCard>
    )
}