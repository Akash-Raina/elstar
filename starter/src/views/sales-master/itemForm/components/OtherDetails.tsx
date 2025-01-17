import { AdaptableCard } from "@/components/shared"
import { FormItem, Input } from "@/components/ui"
import { Field, FormikErrors, FormikTouched } from "formik"

type FormFieldsName = {
    ton : string
    old_bin_card_number:string
}

type BasicInformationFields = {
    touched: FormikTouched<FormFieldsName>
    errors: FormikErrors<FormFieldsName>
}

export const OtherDetails = (props: BasicInformationFields)=>{
    const {touched, errors} = props;
    return <>
        <AdaptableCard divider className="mb-4">
            <h3 className="mb-8">Other details</h3>
            <div className="grid grid-cols-1">
                <div className="grid-col-1 flex gap-2">
                    <div className="w-60">
                        <FormItem
                            label = "Standard consummation rate/ ton"
                            invalid = {(errors.ton && touched.ton)}
                            errorMessage={errors.ton}
                        >
                            <Field
                            type = "text"
                            name = "ton"
                            placeholder = ""
                            component = {Input}
                            />
                        </FormItem>
                    </div>
                </div>

                <div className="grid-col-1 flex gap-2">
                    <div className="w-60">  
                        <FormItem
                        label = "Old bin card number"
                        invalid = {(errors.old_bin_card_number && touched.old_bin_card_number)}
                        errorMessage={errors.old_bin_card_number}
                        >
                            <Field
                                type = "text"
                                name = "old_bin_card_number"
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