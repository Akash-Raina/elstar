import { AdaptableCard } from "@/components/shared"
import { FormItem, Select } from "@/components/ui"
import { injectReducer, useAppDispatch, useAppSelector } from "@/store"
import { Field, FieldProps, FormikErrors, FormikTouched } from "formik"
import reducer, { getCategoryOptions } from "../../ProductForm/store"
import { useEffect } from "react"

type FormFieldName = {
    category: string
}
type SubCategoryFieldsProps = {
    touched: FormikTouched<FormFieldName>
    errors: FormikErrors<FormFieldName>
    values: {
        category: null
    }
}
injectReducer('productFormSlice', reducer)


const Organization = (props: SubCategoryFieldsProps)=>{
    const {
        values = {category: '' },
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
            <h5>Orgainzation</h5>
            <p className="mb-6">Section to config the product attribute</p>
            <div>
                <div>
                    <FormItem 
                        label="Category"
                        invalid ={
                            errors.category && touched.category
                        }
                        errorMessage={errors.category}
                    >
                        <Field name = "category">
                            {({field, form}: FieldProps) => (
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
            </div>
        </AdaptableCard>
    )
}

export default Organization