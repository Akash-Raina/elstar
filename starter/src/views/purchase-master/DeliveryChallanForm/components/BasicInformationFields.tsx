import AdaptableCard from "@/components/shared/AdaptableCard"
import { FormItem, Input, Select } from "@/components/ui"
import { Field, FieldProps, FormikErrors, FormikTouched } from "formik"
import { useRef } from "react"

type FormFieldsName = {
    number: number
    member_type: string
    type:string
    order_no: number
    sales_type: string
    release_order_type: string
    description: string
}

type BasicInformationFields = {
    touched: FormikTouched<FormFieldsName>
    errors: FormikErrors<FormFieldsName>
}

const options = [
    {label: 'Data', value: 0},
    {label: 'Dummy', value: 1},
    {label: 'Text', value: 2},
    {label: 'Data', value: 0},
    {label: 'Dummy', value: 1},
    {label: 'Text', value: 2},
]

const BasicInformationFields = (props: BasicInformationFields)=>{
    const {touched, errors} = props

    return <>
        <AdaptableCard divider className="mb-4">
            <h3 className="mb-8">Add Delivery challan type</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> 
                <div className="col-span-1">
                    <FormItem
                        label = "No"
                        invalid = {(errors.number && touched.number)}
                        errorMessage={errors.number}
                    >
                    <Field
                        type = "text"
                        name = "number"
                        placeholder = ""
                        component = {Input}
                    />
                    </FormItem>
                </div>
                <div className="col-span-1">  
                    <FormItem
                    label = "Member Type"
                    invalid = {(errors.member_type && touched.member_type)}
                    errorMessage={errors.member_type}
                    >
                        <Field
                            type = "text"
                            name = "member_type"
                            placeholder = ""
                            component = {Input}
                        />
                    </FormItem>
                </div>
                <div className="col-span-1">
                    <FormItem
                        label = "Type"
                        invalid = {(errors.type && touched.type)}
                        errorMessage={errors.type}
                    >
                    <Field
                        type = "text"
                        name = "type"
                        placeholder = ""
                        component = {Input}
                    />
                    </FormItem>
                </div>
                <div className="col-span-1">
                    <FormItem
                        label = "Order No"
                        invalid = {(errors.order_no && touched.order_no)}
                        errorMessage={errors.order_no}
                    >
                    <Field
                        type = "text"
                        name = "number"
                        placeholder = ""
                        component = {Input}
                    />
                    </FormItem>
                </div>
                <div className="col-span-1">
                    <FormItem
                        label = "Sales Type"
                        invalid = {(errors.sales_type && touched.sales_type)}
                        errorMessage={errors.sales_type}
                    >
                    <Field
                        type = "text"
                        name = "sales_type"
                        placeholder = ""
                        component = {Input}
                    />
                    </FormItem>
                </div>
                <div className="col-span-1">
                <FormItem
                    label = "Release order type"
                    invalid = {(errors.release_order_type && touched.release_order_type)}
                    errorMessage={errors.release_order_type}
                    >
                        <Field
                            name = "revenue_center"
                        >
                            {({field, form }: FieldProps)=>(
                                <Select
                                field={field}
                                form={form}
                                value={options}
                                options={options}
                            />
                            )}
                        </Field>
                </FormItem>
                </div>
                <div className="col-span-2 w-[145%]">  
                    <DescriptionEditor/>
                </div>
            </div>
        </AdaptableCard>
    </>
}

const DescriptionEditor: React.FC = () => {
  const editorRef = useRef<HTMLDivElement>(null);

  const applyStyle = (command: string) => {
    document.execCommand(command, false);
  };

  return (
    <div className="space-y-2 w-full">
      <label htmlFor="description" className="block text-gray-500 font-bold">
        Description
      </label>
      <div className="border border-gray-300 rounded-lg">
        {/* Toolbar */}
        <div className="flex items-center gap-2 p-2 border-b border-gray-300 bg-gray-100">
            <button className="px-2 py-1 font-semibold hover:bg-gray-200 rounded" onClick={()=>applyStyle("")}>Normal</button>
          <button
            className="px-2 py-1 font-bold hover:bg-gray-200 rounded"
            title="Bold"
            onClick={() => applyStyle("bold")}
          >
            B
          </button>
          <button
            className="px-2 py-1 italic hover:bg-gray-200 rounded"
            title="Italic"
            onClick={() => applyStyle("italic")}
          >
            /
          </button>
          <button
            className="px-2 py-1 underline hover:bg-gray-200 rounded"
            title="Underline"
            onClick={() => applyStyle("underline")}
          >
            U
          </button>
        </div>

        {/* Editable Area */}
        <div
          ref={editorRef}
          contentEditable
          id="description"
          className="w-full h-32 p-2 overflow-auto focus:outline-none"
          placeholder="Write your description here..."
        ></div>
      </div>
    </div>
  );
};

export default BasicInformationFields