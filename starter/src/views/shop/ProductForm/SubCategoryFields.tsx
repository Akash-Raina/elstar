import { AdaptableCard } from '@/components/shared'
import { FormItem, Select } from '@/components/ui'
import { injectReducer, useAppDispatch, useAppSelector } from '@/store'
import { Field, FieldProps, FormikErrors, FormikTouched } from 'formik'
import { useEffect } from 'react'
import reducer, { getCategoryOptions, getSubCategoryOptions } from './store'

type FormFieldName = {
    category: string
    sub_category: string
}

type SubCategoryFieldsProps = {
    touched: FormikTouched<FormFieldName>
    errors: FormikErrors<FormFieldName>
    values: {
        category: string
        sub_category: string
    }
}

injectReducer('productFormSlice', reducer)
export const SubCategoryFields = (props: SubCategoryFieldsProps) => {
    const {
        values = { sub_category: '', category: '' },
        touched,
        errors,
    } = props
    const dispatch = useAppDispatch()
    const { categoryOptions, subCategoryOptions } = useAppSelector(
        (state: any) => state.productFormSlice.data
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
                                        form.setFieldValue('sub_category', '')
                                        const req = {
                                            category_id: option?.value,
                                        }
                                        dispatch(getSubCategoryOptions(req))
                                    }}
                                />
                            )}
                        </Field>
                    </FormItem>
                </div>
                <div className="col-span-1">
                    <FormItem
                        label="Sub Category"
                        invalid={
                            (errors.sub_category &&
                                touched.sub_category) as boolean
                        }
                        errorMessage={errors.sub_category}
                    >
                        <Field name="sub_category">
                            {({ field, form }: FieldProps) => (
                                <Select
                                    field={field}
                                    form={form}
                                    options={subCategoryOptions}
                                    value={values.sub_category}
                                    isDisabled={!values.category}
                                    onChange={(option) =>
                                        form.setFieldValue(field.name, option)
                                    }
                                />
                            )}
                        </Field>
                    </FormItem>
                </div>
            </div>
        </AdaptableCard>
    )
}
