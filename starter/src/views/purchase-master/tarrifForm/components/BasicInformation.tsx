import AdaptableCard from "@/components/shared/AdaptableCard"
import { FormItem, Input } from "@/components/ui"
import { Field, FormikErrors, FormikTouched } from "formik"
import { useRef } from "react"

type FormFieldsName = {
    code: number
    name: string
    description: string
    type: string
}

type BasicInformationFields = {
    touched: FormikTouched<FormFieldsName>
    errors: FormikErrors<FormFieldsName>
}

const BasicInformationFields = (props: BasicInformationFields)=>{
    const {touched, errors} = props

    return <>
        <AdaptableCard divider className="mb-4">
            <h3 className="mb-8">Add Tarrif Heading</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4"> 
                <div className="col-span-1">
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
                <div className="col-span-1">  
                    <FormItem
                    label = "Name"
                    invalid = {(errors.name && touched.name)}
                    errorMessage={errors.name}
                    >
                        <Field
                            type = "text"
                            name = "name"
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
                    <input type="checkbox" />
                    <label className="ml-2">Revenue</label>
                </div>
                <div className="col-span-1">
                    <input type="checkbox" />
                    <label className="ml-2">Capital</label>
                </div>
                <div className="col-span-3 w-[155%] mt-10">  
                    {/* <FormItem
                    label = "Description"
                    invalid = {(errors.description && touched.description)}
                    errorMessage={errors.description}
                    >
                        <Field
                            type = "text"
                            name = "description"
                            placeholder = ""
                            component = {Input}
                        />
                    </FormItem> */}
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
    <div className="p-4 space-y-2 w-full">
      <label htmlFor="description" className="block text-gray-700 font-medium">
        Description
      </label>
      <div className="border border-gray-300 rounded-lg">
        {/* Toolbar */}
        <div className="flex items-center gap-2 p-2 border-b border-gray-300 bg-gray-100">
          <button
            onClick={() => applyStyle("bold")}
            className="px-2 py-1 font-bold hover:bg-gray-200 rounded"
            title="Bold"
          >
            B
          </button>
          <button
            onClick={() => applyStyle("italic")}
            className="px-2 py-1 italic hover:bg-gray-200 rounded"
            title="Italic"
          >
            /
          </button>
          <button
            onClick={() => applyStyle("underline")}
            className="px-2 py-1 underline hover:bg-gray-200 rounded"
            title="Underline"
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