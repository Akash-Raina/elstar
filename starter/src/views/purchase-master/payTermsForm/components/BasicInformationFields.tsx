import AdaptableCard from "@/components/shared/AdaptableCard"
import { FormItem, Input, Select } from "@/components/ui"
import { Field, FieldProps, FormikErrors, FormikTouched } from "formik"
import { useRef } from "react"

type FormFieldsName = {
    code: number
    description: string
    payment_type: string
}

type BasicInformationFields = {
    touched: FormikTouched<FormFieldsName>
    errors: FormikErrors<FormFieldsName>
}

const options = [
    {label: 'Online', value: 0},
    {label: 'Cash', value: 1},
    {label: 'Card', value: 2}
]

const BasicInformationFields = (props: BasicInformationFields)=>{
    const {touched, errors} = props

    return <>
        <AdaptableCard divider className="mb-4">
            <h3 className="mb-8">Add Pay term type master</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> 
                <div className="col-span-">
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
                <div className="col-span-3 w-[150%]">  
                    <DescriptionEditor/>
                </div>
                <div className="col-span-1">
                    <FormItem
                        label = "Payment Type"
                        invalid = {(errors.payment_type && touched.payment_type)}
                        errorMessage={errors.payment_type}
                        >
                            <Field
                                name = "payment_type"
                            >
                                {({field, form }: FieldProps)=>(
                                    <Select
                                    field={field}
                                    form={form}
                                    value={options[0]}
                                    options={options}
                                />
                                )}
                            </Field>
                    </FormItem>
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
          <button className="px-1 py-1 font-semibold hover:bg-gray-200 rounded" onClick={()=>applyStyle("")}>
            Normal
          </button>
          <button
            className="px-1 py-1 font-bold hover:bg-gray-200 rounded"
            title="Bold"
            onClick={() => applyStyle("bold")}
          >
            B
          </button>
          <button
            className="px-1 py-1 italic hover:bg-gray-200 rounded"
            title="Italic"
            onClick={() => applyStyle("italic")}
          >
            /
          </button>
          <button
            className="px-1 py-1 underline hover:bg-gray-200 rounded"
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