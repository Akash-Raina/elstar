import { AdaptableCard } from "@/components/shared"
import { FormItem, Select } from "@/components/ui"
import { Field, FieldProps, FormikErrors, FormikTouched } from "formik"

type FormFieldsName = {
    status: string
}

type OrganizationFieldsProps = {
    touched: FormikTouched<FormFieldsName>
    errors: FormikErrors<FormFieldsName>
    values: {
        status: string
    }
}

const status = [
    { label: 'Active', value: 0 },
    { label: 'Inactive', value: 1 },
]

export const OrganizationFields = (props: OrganizationFieldsProps)=>{

    const {
        values = {status: ''},
        touched,
        errors,
    } = props
    
    return <AdaptableCard divider isLastChild className="mb-4">
        <h5>Status</h5>
        <p className="mb-6">Section to config the category status</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col-span-1">
                    <FormItem
                        label="Status"
                        invalid={
                            (errors.status && touched.status) as boolean
                        }
                        errorMessage={errors.status}
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
                                    onChange={(option) =>
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
        </div>
    </AdaptableCard>
}