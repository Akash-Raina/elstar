import { AdaptableCard } from "@/components/shared"
import { FormItem, Select } from "@/components/ui"
import { apiGetAllCategory, apiGetAllSubCategory } from "@/services/ShopService"
import axios from "axios"
import { Field, FieldProps, FormikErrors, FormikTouched } from "formik"
import { useEffect, useState } from "react"
import AsyncSelect from "react-select/async"

type FormFieldName = {
    category: string
    sub_category: string
}

type SubCategoryFieldsProps = {
    touched: FormikTouched<FormFieldName>
    errors: FormikErrors<FormFieldName>
    values:{
        category: string
        sub_category: string
    }
}

// type Category = {
//     label: string;
//     value: number;
// };


export const SubCategoryFields = (props: SubCategoryFieldsProps)=>{

    const categoryOption = async () => {
        const response = await apiGetAllCategory();
        return response.data.data;
    };

    // const subCategoryOption = async ()=>{
    //     const data = {
    //         "category_id": values.category.value
    //     }
    //     console.log(data)
    //     const response = await apiGetAllSubCategory(data)
    //     console.log("subcat -> ", response.data.data)
    //     return response.data.data;
    // } 
    
    const {values = {sub_category:'', category:''}, touched, errors} = props
    return <AdaptableCard>
        <h5>Organization</h5>
        <p className="mb-6">Section to config the product attribute</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-1">
                <FormItem
                    label="Category"
                    invalid = {
                        (errors.category && touched.category) as boolean
                    }
                    errorMessage={errors.category}
                >
                    <Field name = "category">
                        {({field, form}: FieldProps)=>(
                            <Select
                                field={field}
                                form={form}
                                defaultOptions
                                value={values.category}
                                onChange={(option)=>{
                                    form.setFieldValue(field.name, option)
                                    form.setFieldValue("sub_category","")
                                }}
                                loadOptions={categoryOption}
                                componentAs={AsyncSelect}
                            />

                        )}
                    </Field>
                </FormItem>
            </div>
            <div className="col-span-1">
                <FormItem
                    label="Sub Category"
                    invalid = {
                        (errors.sub_category && touched.sub_category) as boolean
                    }
                    errorMessage={errors.sub_category}
                >
                    <Field name = "sub_category">
                        {({field, form}: FieldProps)=>(
                            <Select
                                field={field}
                                form={form}
                                defaultOptions
                                value={values.sub_category}

                                
                                componentAs={AsyncSelect}
                            />

                        )}
                    </Field>
                </FormItem>
            </div>
        </div>
    </AdaptableCard>
}