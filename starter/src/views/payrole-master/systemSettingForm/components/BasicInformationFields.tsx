import AdaptableCard from "@/components/shared/AdaptableCard"
import { FormItem, Input, Select } from "@/components/ui"
import { Field, FieldProps, FormikErrors, FormikTouched } from "formik"

type FormFieldsName = {
    leave_month: string
    limit_of_pf: string
    weekly_off: string
    leave_encash_app: string
    leave_encashment_days: string
    tds_circle: string
    retire_age: string
    assessment_year: string
    manager_payroll: string
    designation:string
    pf_setting: string
    reward_salary_hand: string
    suspended_salary: number
    code_no: number
    group_no: number
    applicant_kyc_path: string
}

type BasicInformationFields = {
    touched: FormikTouched<FormFieldsName>
    errors: FormikErrors<FormFieldsName>
}

const options = [{label: "Yes", value: 0}, {label: 'No', value: 1}]

const BasicInformationFields = (props: BasicInformationFields)=>{

    const {touched, errors} = props;

    return <>
        <AdaptableCard divider className="mb-4">
            <h3 className="mb-8">Add System Setting</h3>
            <div className="grid grid-cols-1"> 
                <div className="grid-col-1 flex gap-2">
                    <div className="w-60">  
                        <FormItem
                        label = "Leave Month"
                        invalid = {(errors.leave_month && touched.leave_month)}
                        errorMessage={errors.leave_month}
                        >
                            <Field
                                name = "leave_month"
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
                        label = "Limit of P.F."
                        invalid = {(errors.limit_of_pf && touched.limit_of_pf)}
                        errorMessage={errors.limit_of_pf}
                        >
                            <Field
                                type = "text"
                                name = "limit_of_pf"
                                placeholder = ""
                                component = {Input}
                            />
                        </FormItem>
                    </div>
                    <div className="ml-[37px] w-60">  
                        <FormItem
                        label = "Weekly Off"
                        invalid = {(errors.weekly_off && touched.weekly_off)}
                        errorMessage={errors.weekly_off}
                        >
                            <Field
                                name = "weekly_off"
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
                <div className="grid-col-1 flex gap-2">
                    <div className="w-60">  
                        <FormItem
                        label = "Leave Encash App."
                        invalid = {(errors.leave_encash_app && touched.leave_encash_app)}
                        errorMessage={errors.leave_encash_app}
                        >
                            <Field
                                name = "leave_encash_app"
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
                        label = "Leave Encashment Days"
                        invalid = {(errors.leave_encashment_days && touched.leave_encashment_days)}
                        errorMessage={errors.leave_encashment_days}
                        >
                            <Field
                                type = "text"
                                name = "leave_encashment_days"
                                placeholder = ""
                                component = {Input}
                            />
                        </FormItem>
                    </div> 
                </div>
                <div className="grid-col-1 flex gap-2">
                    <div className="w-60">  
                        <FormItem
                        label = "TDS Circle"
                        invalid = {(errors.tds_circle && touched.tds_circle)}
                        errorMessage={errors.tds_circle}
                        >
                            <Field
                                type = "text"
                                name = "tds_circle"
                                placeholder = ""
                                component = {Input}
                            />
                        </FormItem>
                    </div>
                    <div className="ml-[37px] w-60">  
                        <FormItem
                        label = "Retire Age"
                        invalid = {(errors.retire_age && touched.retire_age)}
                        errorMessage={errors.retire_age}
                        >
                            <Field
                                type = "text"
                                name = "retire_age"
                                placeholder = ""
                                component = {Input}
                            />
                        </FormItem>
                    </div>
                    <div className="ml-[37px] w-60">  
                        <FormItem
                        label = "Assessment Year "
                        invalid = {(errors.assessment_year && touched.assessment_year)}
                        errorMessage={errors.assessment_year}
                        >
                            <Field
                                name = "assessment_year"
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
                <div className="grid-col-1 flex gap-2">
                    <div className="w-[812px]">  
                        <FormItem
                        label = "Manager Payroll"
                        invalid = {(errors.manager_payroll && touched.manager_payroll)}
                        errorMessage={errors.manager_payroll}
                        >
                            <Field
                                type = "text"
                                name = "manager_payroll"
                                placeholder = ""
                                component = {Input}
                            />
                        </FormItem>
                    </div>
                </div>
                <div className="grid-col-1 flex gap-2">
                    <div className="w-60">  
                        <FormItem
                        label = "Designation"
                        invalid = {(errors.designation && touched.designation)}
                        errorMessage={errors.designation}
                        >
                            <Field
                                type = "text"
                                name = "designation"
                                placeholder = ""
                                component = {Input}
                            />
                        </FormItem>
                    </div>
                    <div className="ml-[37px] w-60">  
                        <FormItem
                        label = "PF Setting"
                        invalid = {(errors.pf_setting && touched.pf_setting)}
                        errorMessage={errors.pf_setting}
                        >
                            <Field
                                type = "text"
                                name = "pf_setting"
                                placeholder = ""
                                component = {Input}
                            />
                        </FormItem>
                    </div>
                    <div className="ml-[37px] w-60">  
                        <FormItem
                        label = "Reward Salary hand"
                        invalid = {(errors.reward_salary_hand && touched.reward_salary_hand)}
                        errorMessage={errors.reward_salary_hand}
                        >
                            <Field
                                type = "text"
                                name = "reward_salary_hand"
                                placeholder = ""
                                component = {Input}
                            />
                        </FormItem>
                    </div>
                </div>
                <div className="grid-col-1 flex gap-2">
                    <div className="w-60">  
                        <FormItem
                        label = "Suspended Salary"
                        invalid = {(errors.suspended_salary && touched.suspended_salary)}
                        errorMessage={errors.suspended_salary}
                        >
                            <Field
                                type = "text"
                                name = "suspended_salary"
                                placeholder = ""
                                component = {Input}
                            />
                        </FormItem>
                    </div>
                    <div className="ml-[37px] w-60">  
                        <FormItem
                        label = "Code No"
                        invalid = {(errors.code_no && touched.code_no)}
                        errorMessage={errors.code_no}
                        >
                            <Field
                                type = "text"
                                name = "code_no"
                                placeholder = ""
                                component = {Input}
                            />
                        </FormItem>
                    </div>
                    <div className="ml-[37px] w-60">  
                        <FormItem
                        label = "Group No"
                        invalid = {(errors.group_no && touched.group_no)}
                        errorMessage={errors.group_no}
                        >
                            <Field
                                type = "text"
                                name = "group_no"
                                placeholder = ""
                                component = {Input}
                            />
                        </FormItem>
                    </div>
                </div>
                <div className="grid-col-1 flex gap-2">
                    <div className="w-[812px]">  
                        <FormItem
                        label = "Applicant KYC Path"
                        invalid = {(errors.applicant_kyc_path && touched.applicant_kyc_path)}
                        errorMessage={errors.applicant_kyc_path}
                        >
                            <Field
                                type = "text"
                                name = "applicant_kyc_path"
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