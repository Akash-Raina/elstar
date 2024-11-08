import { AdaptableCard, ConfirmDialog, DoubleSidedImage } from "@/components/shared"
import { Dialog, FormItem, Upload } from "@/components/ui"
import { Field, FieldInputProps, FieldProps, FormikProps, } from "formik"
import  cloneDeep  from "lodash"
import { useState } from "react"
import { HiEye, HiTrash } from "react-icons/hi"

type Image = {
    id: string
    name: string
    img: File
    url: string
}

type FormModel = {
    imgList: Image[]
    [key: string]: unknown
}

type ImageListProps = {
    imgList: Image[]
    onImageDelete: (img: Image) => void
}

type ProductImagesProps = {
    values: FormModel
}

const ImageList = (props: ImageListProps)=>{

    const { imgList, onImageDelete } = props

    const [selectedImg, setSelectedImg] = useState<Image>({} as Image)
    const [viewOpen, setViewOpen] = useState(false)
    const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false)

    const onViewOpen = (img: Image) =>{
        setSelectedImg(img)
        setViewOpen(true)
    }

    const onDialogClose = ()=>{
        setViewOpen(false)
        setTimeout(() =>{
            setTimeout(()=>{
                setSelectedImg({} as Image)
            }, 300)
        })
    }

    const onDeleteConfirmation = (img: Image) =>{
        setSelectedImg(img)
        setDeleteConfirmationOpen(true)
    }

    const onDeleteConfirmationClose = () => {
        setSelectedImg({} as Image)
        setDeleteConfirmationOpen(false)
    }

    const onDelete = () => {
        onImageDelete?.(selectedImg)
        setDeleteConfirmationOpen(false)
    }

    return (
        <>
            {imgList.map((img) => (
                <div
                    key={img.id}
                    className="group relative rounded border p-2 flex"
                >
                    <img
                        className="rounded max-h-[140px] max-w-full"
                        src={img.url}
                        alt={img.name}
                    />
                    <div className="absolute inset-2 bg-gray-900/[.7] group-hover:flex hidden text-xl items-center justify-center">
                        <span
                            className="text-gray-100 hover:text-gray-300 cursor-pointer p-1.5"
                            onClick={() => onViewOpen(img)}
                        >
                            <HiEye />
                        </span>
                        <span
                            className="text-gray-100 hover:text-gray-300 cursor-pointer p-1.5"
                            onClick={() => onDeleteConfirmation(img)}
                        >
                            <HiTrash />
                        </span>
                    </div>
                </div>
            ))}
            <Dialog
                isOpen={viewOpen}
                onClose={onDialogClose}
                onRequestClose={onDialogClose}
            >
                <h5 className="mb-4">{selectedImg.name}</h5>
                <img
                    className="w-full"
                    src={selectedImg.url}
                    alt={selectedImg.name}
                />
            </Dialog>
            <ConfirmDialog
                isOpen={deleteConfirmationOpen}
                type="danger"
                title="Remove image"
                confirmButtonColor="red-600"
                onClose={onDeleteConfirmationClose}
                onRequestClose={onDeleteConfirmationClose}
                onCancel={onDeleteConfirmationClose}
                onConfirm={onDelete} 
            >
                <p> Are you sure you want to remove this image? </p>
            </ConfirmDialog>
        </>
    )
}

export const ProductImages = (props: ProductImagesProps)=>{

    const { values } = props
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

    const handleImageDelete = (
        form: FormikProps<FormModel>,
        field: FieldInputProps<FormModel>,
        deletedImg: Image
    ) =>{
        let imgList = cloneDeep(values.imgList)
        imgList = imgList.filter((img)=> img.id !== deletedImg.id)
        form.setFieldValue(field.name, imgList)
    }

    return (
        <AdaptableCard className="mb-4">
            <h5>Product Image</h5>
            <p className="mb-6">Add or change image for the product</p>
            <FormItem>
                <Field name ="imgList">
                    {({field, form }: FieldProps) => {
                        if(values.imgList.length > 0){
                            return(
                                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                                    <ImageList
                                        imgList = {values.imgList}
                                        onImageDelete = {(img: Image) =>
                                            handleImageDelete(form, field, img)
                                        }
                                    />
                                    <Upload
                                        draggable
                                        className="min-h-fit"
                                        beforeUpload={beforeUpload}
                                        showList={false}
                                        onChange={(files) =>
                                            onUpload(form, field, files)
                                        }
                                    >
                                        <div className="max-w-full flex flex-col px-4 py-2 justify-center items-center">
                                            <DoubleSidedImage
                                                src="/img/others/upload.png"
                                                darkModeSrc="/img/others/upload-dark.png"
                                            />
                                            <p className="font-semibold text-center text-gray-800 dark:text-white">
                                                Upload
                                            </p>
                                        </div>
                                    </Upload>
                                </div>
                            )
                        }

                        return (
                            <Upload 
                            draggable
                            beforeUpload={beforeUpload}
                            showList = {false}
                            onChange={(files)=>
                                onUpload(form, field, files)
                            }
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
                    }
                </Field>
            </FormItem>
        </AdaptableCard>
    )
}