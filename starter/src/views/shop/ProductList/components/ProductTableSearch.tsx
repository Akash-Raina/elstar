import { useRef } from 'react'
import Input from '@/components/ui/Input'
import { HiOutlineSearch } from 'react-icons/hi'

const ProductTableSearch = () => {

    const searchInput = useRef(null)
    
    return (
        <Input
            ref={searchInput}
            className="max-w-md md:w-52 md:mb-0 mb-4"
            size="sm"
            placeholder="Search product"
            prefix={<HiOutlineSearch className="text-lg" />}
        />
    )
}

export default ProductTableSearch