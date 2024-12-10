import Button from '@/components/ui/Button'
import { HiDownload, HiPlusCircle, HiOutlineFilter } from 'react-icons/hi'
import ProductTableSearch from './ProductTableSearch'
import { Link, useNavigate } from 'react-router-dom'
import { useAppSelector } from '@/store'
import { downloadCSV } from '../../downloadCSV'

export const ProductTableTools = () => {
    const navigate = useNavigate()
    const products = useAppSelector(
        (state:any) => state.shopProductList.data.productList
    )
    console.log("products", products)

    const handleDownload = ()=>{
        downloadCSV(products, 'product.csv')
    }
    return (
        <div className="flex flex-col lg:flex-row lg:items-center">
            <ProductTableSearch />
            <div className="block lg:inline-block md:mx-2 md:mb-0 mb-4">
                <Button block size='sm' icon={<HiOutlineFilter/>}>Filter</Button>
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