import Button from "@/components/ui/Button"
import { HiDownload, HiOutlineFilter, HiPlusCircle } from "react-icons/hi"
import { Link, useNavigate } from "react-router-dom"
import CategoryTableSearch from "./CategoryTableSearch";
import { useAppSelector } from "@/store";
import { downloadCSV } from "../../downloadCSV";
import { sendList } from "../store";


const CategoryTableTools = ()=>{

    const navigate = useNavigate();
    const categories = useAppSelector(
        (state:any) => state.shopCategoryList.data.categoryList
    )
    const handleDownload =  async()=>{

        const data = {
            data: categories,
            type: "category"
          }
        
        await downloadCSV(data)

    }

    return (
        <div className="flex flex-col lg:flex-row lg:items-center">
            <CategoryTableSearch />
            <div className="block lg:inline-block md:mx-2 md:mb-0 mb-4">
                <Button block size='sm' icon={<HiOutlineFilter/>}>Filter</Button>
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
                <Button block variant="solid" size="sm" icon={<HiPlusCircle />} onClick={()=>{navigate('/category/newcategory')}}>
                    Add Category
                </Button>
            </div>
        </div>
    )
}

export default CategoryTableTools