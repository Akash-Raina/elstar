import Button from '@/components/ui/Button'
import { HiDownload, HiPlusCircle } from 'react-icons/hi'
import ProductTableSearch from './ProductTableSearch'
import { Link, useNavigate } from 'react-router-dom'
import { useAppSelector } from '@/store'
import { downloadCSV } from '../../downloadCSV'
import { FaFileAlt } from 'react-icons/fa'
import { useRef, useState } from 'react'
import { importXLSX } from '../../importXLSX'
import { toast, Notification } from '@/components/ui'

export const ProductTableTools = () => {

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    const products = useAppSelector(
        (state:any) => state.shopProductList.data.productList
    )

    const [file, setFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    // Handle file selection
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.files) {
        setFile(event.target.files[0]);
      }
    };

    const handleImportButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleImport = async ()=>{

         if (file) {
            setLoading(true);
            const success = await importXLSX(file, "product");

            if(success){
                setLoading(false);
                popNotification('Created')
            }
        } else {
            alert('No file selected');
        }
    }

    const handleDownload = async()=>{
        const data = {
            data: products,
            type: 'product'
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
                Product successfuly{keyword}
            </Notification>,
            {
                placement: 'top-center',
            }
        )
        navigate('/category')
    }
    return (
        <div className="flex flex-col lg:flex-row lg:items-center">
            <ProductTableSearch />
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
                to="#"
                onClick={handleDownload}
            >
                
                <Button block size="sm" icon={<HiDownload />}>
                    Export
                </Button>
            </Link>
            <div className="block lg:inline-block md:mb-0 mb-4">
                <Button block variant="solid" size="sm" icon={<HiPlusCircle />} onClick={()=>{navigate(`/productlist/newproduct`)}}>
                    Add Product
                </Button>
            </div>
        </div>
    )
}