import { AdaptableCard, DoubleSidedImage } from "@/components/shared"
import { FormItem, Upload } from "@/components/ui"
import { Field, FieldProps } from "formik"

export const ProductImages = ()=>{

    const beforeUpload = (file:FileList | null)=>{
        let valid: boolean | string  = true

        const allowedFileType = ['image/jpeg', 'image/png']
        const maxFileSize = 500000

        if(file){
            console.log(file)
            for(const f of file){
                console.log(f);
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

    return (
        <AdaptableCard className="mb-4">
            <h5>Product Image</h5>
            <p className="mb-6">Add or change image for the product</p>
            <FormItem>
                <Field name = "imglist">
                    {({field, form }: FieldProps)=>(
                            <Upload
                                draggable   
                            >
                                <div className="my-16 text-center">
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
                    }
                </Field>
            </FormItem>
        </AdaptableCard>
    )
}