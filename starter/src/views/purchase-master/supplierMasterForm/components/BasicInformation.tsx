import { DoubleSidedImage } from "@/components/shared"
import AdaptableCard from "@/components/shared/AdaptableCard"
import { FormItem, Input, Upload } from "@/components/ui"
import { FormModel } from "@/views/sales/ProductForm"
import { Field, FieldInputProps, FieldProps, FormikErrors, FormikProps, FormikTouched } from "formik"
import Navbar from "./footer/Navbar"

type FormFieldsName = {
    supplier_code: number
    supplier_name: string
    type: string
    trade_name: string
    sub_type: string
    legal_name: string
    rd_urd: string
    ecommerce_operator: string
    document_type: string
    image:File
}

type BasicInformationFields = {
    touched: FormikTouched<FormFieldsName>
    errors: FormikErrors<FormFieldsName>
}

const BasicInformationFields = (props: BasicInformationFields)=>{
    const {touched, errors} = props

    const beforeUpload = (file:FileList | null)=>{
        let valid: boolean | string  = true

        const allowedFileType = ['image/jpeg', 'image/png']
        const maxFileSize = 500000

        if(file){
            for(const f of file){
                if(!allowedFileType.includes(f.type)){
                    valid = 'Please upload a .jpeg or .png file'
                }
                
                if(f.size >= maxFileSize){
                    valid = "Upload image cannot more then 500kb!"
                }
            }
        }
        return valid
    }

    const onUpload = (
            form: FormikProps<FormModel>,
            field: FieldInputProps<FormModel>,
            files: File[]
        ) =>{
            const imageId = `1-img-0`
            const latestUpload = files.length - 1 
            const image = {
                id: imageId,
                name: files[latestUpload].name,
                url: URL.createObjectURL(files[0]),
                img: files[latestUpload]
            
            }
            const imageList = [image]
            console.log(imageList[0])
            form.setFieldValue(field.name, imageList)
    }

    return <>
        <AdaptableCard divider className="mb-4">
            <h3 className="mb-8">Add Supplier Master </h3>
            <div className="grid grid-cols-1"> 
                <div className="grid-col-1 flex gap-2">
                    <div className="w-60">  
                        <FormItem
                        label = "Supplier code"
                        invalid = {(errors.supplier_code && touched.supplier_code)}
                        errorMessage={errors.supplier_code}
                        >
                            <Field
                                type = "text"
                                name = "supplier_code"
                                placeholder = ""
                                component = {Input}
                            />
                        </FormItem>
                    </div>
                    <div className="ml-[37px] w-60">
                        <FormItem
                            label = "Supplier name"
                            invalid = {(errors.supplier_name && touched.supplier_name)}
                            errorMessage={errors.supplier_name}
                        >
                        <Field
                            type = "text"
                            name = "supplier_name"
                            placeholder = ""
                            component = {Input}
                        />
                        </FormItem>
                    </div>
                    <div className="ml-[80px] w-60">
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
                </div>
                <div className="grid-col-1 flex gap-2">                
                    <div className="w-[528px]">
                        <FormItem
                            label = "Trade Name"
                            invalid = {(errors.trade_name && touched.trade_name)}
                            errorMessage={errors.trade_name}
                        >
                        <Field
                            type = "text"
                            name = "trade_name"
                            placeholder = ""
                            component = {Input}
                        />
                        </FormItem>
                    </div>
                    <div className="ml-[80px] w-60">
                        <FormItem
                            label = "Sub type"
                            invalid = {(errors.sub_type && touched.sub_type)}
                            errorMessage={errors.sub_type}
                        >
                        <Field
                            type = "text"
                            name = "sub_type"
                            placeholder = ""
                            component = {Input}
                        />
                        </FormItem>
                    </div>
                </div>
                <div className="grid-col-1 flex gap-2">
                    <div className="w-[528px]">
                        <FormItem
                            label = "legal Name"
                            invalid = {(errors.legal_name && touched.legal_name)}
                            errorMessage={errors.legal_name}
                        >
                        <Field
                            type = "text"
                            name = "Legal name"
                            placeholder = ""
                            component = {Input}
                        />
                        </FormItem>
                    </div>
                    <div className="ml-[80px] w-60">
                        <FormItem
                            label = "Rd/URD"
                            invalid = {(errors.rd_urd && touched.rd_urd)}
                            errorMessage={errors.rd_urd}
                        >
                        <Field
                            type = "text"
                            name = "rd_urd"
                            placeholder = ""
                            component = {Input}
                        />
                        </FormItem>
                    </div>
                </div>
                <div className="grid-col-1 flex gap-2">
                    <div className="w-60">
                        <FormItem
                            label = "E-commerce Operator"
                            invalid = {(errors.ecommerce_operator && touched.ecommerce_operator)}
                            errorMessage={errors.ecommerce_operator}
                        >
                        <Field
                            type = "text"
                            name = "ecommerce_operator"
                            placeholder = ""
                            component = {Input}
                        />
                        </FormItem>
                    </div>
                    <div className="ml-[37px] w-60">
                        <FormItem
                            label = "Document type"
                            invalid = {(errors.document_type && touched.document_type)}
                            errorMessage={errors.document_type}
                        >
                        <Field
                            type = "text"
                            name = "document_type"
                            placeholder = ""
                            component = {Input}
                        />
                        </FormItem>
                    </div>
                    <div className="ml-[80px] w-60">
                        <FormItem>
                            <Field name = "imgList">
                                {({field, form}: FieldProps) =>{
                                    return (
                                        <Upload 
                                        draggable
                                        beforeUpload={beforeUpload} 
                                        showList = {false}
                                        onChange={(files)=>
                                            onUpload(form, field, files)
                                        }
                                        >
                                            <div className="my-4 text-center">
                                                <DoubleSidedImage
                                                    className="mx-auto"
                                                    src="/img/others/upload.png"
                                                    darkModeSrc="/img/others/upload-dark.png"
                                                />
                                                <p className="font-semibold">
                                                    <span className="text-gray-800 dark:text-white">
                                                        Drop your image here, or{' '}
                                                    </span>
                                                    <span className="text-blue-500">
                                                        browse
                                                    </span>
                                                </p>
                                                <p className="mt-1 opacity-60 dark:text-white">
                                                    Support: jpeg, png
                                                </p>
                                            </div>
                                        </Upload>                            
                                    )
                                }}
                            </Field>
                        </FormItem>
                    </div>
                </div>
                <div className="grid-col-1">
                    <Navbar/>
                </div>
            </div>
        </AdaptableCard>
    </>
}

export default BasicInformationFields