import Button from "@/components/ui/Button";
import { HiDownload, HiPlusCircle } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import SubCategoryTableSearch from "./SubCategoryTableSearch";
import { useAppSelector } from "@/store";
import { downloadCSV } from "../../downloadCSV";
import { FaFileAlt } from "react-icons/fa";
import { useRef, useState } from "react";
import { importXLSX } from "../../importXLSX";
import { toast, Notification } from "@/components/ui";


const SubCategoryTableTools = ()=>{

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const subCategories = useAppSelector(
        (state:any) => state.shopSubCategoryList.data.subCategoryList
    )

    const [file, setFile] = useState<File | null>(null)
    const fileInputRef = useRef<HTMLInputElement | null>(null)

    // Handle file selection
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setFile(event.target.files[0])
        }
    }

    const handleImportButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click()
        }
    }

    const handleImport = async () => {
        if (file) {
            setLoading(true);
            const success = await importXLSX(file, "subcategory");
            setFile(null);

            if(success){
                setLoading(false);
                popNotification('Created')
            }

        } else {
            alert('No file selected')
        }
    }
    
    const handleDownload = async()=>{
        const data = {
            data: subCategories,
            type: 'subcategory'
        }
        await downloadCSV(data)
    }

    const popNotification = (keyword: string) => {
        toast.push(
            <Notification
                title={`Successfuly ${keyword}`}
                type="success"
                duration={2500}
            >
                SubCategory successfuly{keyword}
            </Notification>,
            {
                placement: 'top-center',
            }
        )
        navigate('/category')
    }
    return (
        <div className="flex flex-col lg:flex-row lg:items-center">
            <SubCategoryTableSearch />
            <div className="block lg:flex md:mx-2 md:mb-0 mb-4 gap-2">
                <input
                    type="file"
                    accept=".xlsx, .xls"
                    className="hidden"
                    onChange={handleFileChange}
                    ref={fileInputRef}
                />
                    <button 
                        className={`border flex justify-center items-center gap-1 w-10 h-9 rounded-lg font-semibold text-slate-500 ${file ? 'bg-blue-500 text-white' : 'border-slate-300'}`}
                        onClick={handleImportButtonClick} 
                    >
                        <FaFileAlt/>
                    </button>

                <Button variant="solid" color="sky-600" loading={loading} size='sm' onClick={handleImport}>
                    Upload
                </Button>
            </div>

            <Link 
                
                className="block lg:inline-block md:mx-2 md:mb-0 mb-4"
                to = '#'
                onClick={handleDownload}
            >
                
                <Button block size="sm" icon={<HiDownload />}>
                    Export
                </Button>
            </Link>
            <div className="block lg:inline-block md:mb-0 mb-4">
                <Button block variant="solid" size="sm" icon={<HiPlusCircle />} onClick={()=>{navigate('/subcategory/newsubcategory')}}>
                    Add SubCategory
                </Button>
            </div>
        </div>
    )
}

export default SubCategoryTableTools