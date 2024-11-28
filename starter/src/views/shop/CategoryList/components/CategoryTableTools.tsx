import Button from "@/components/ui/Button"
import { HiDownload, HiOutlineFilter, HiPlusCircle } from "react-icons/hi"
import { useNavigate } from "react-router-dom"
import CategoryTableSearch from "./CategoryTableSearch";

const CategoryTableTools = ()=>{

    const navigate = useNavigate();
    return (
        <div className="flex flex-col lg:flex-row lg:items-center">
            <CategoryTableSearch />
            <div className="block lg:inline-block md:mx-2 md:mb-0 mb-4">
                <Button block size='sm' icon={<HiOutlineFilter/>}>Filter</Button>
            </div>

            <div className="block lg:inline-block md:mx-2 md:mb-0 mb-4">
                
                <Button block size="sm" icon={<HiDownload />}>
                    Export
                </Button>
            </div>
            <div className="block lg:inline-block md:mb-0 mb-4">
                <Button block variant="solid" size="sm" icon={<HiPlusCircle />} onClick={()=>{navigate('/category/newcategory')}}>
                    Add Category
                </Button>
            </div>
        </div>
    )
}

export default CategoryTableTools