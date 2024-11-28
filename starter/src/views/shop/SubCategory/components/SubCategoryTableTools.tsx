import Button from "@/components/ui/Button";
import { HiDownload, HiOutlineFilter, HiPlusCircle } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import SubCategoryTableSearch from "./SubCategoryTableSearch";

const SubCategoryTableTools = ()=>{

    const navigate = useNavigate();
    return (
        <div className="flex flex-col lg:flex-row lg:items-center">
            <SubCategoryTableSearch />
            <div className="block lg:inline-block md:mx-2 md:mb-0 mb-4">
                <Button block size='sm' icon={<HiOutlineFilter/>}>Filter</Button>
            </div>

            <div className="block lg:inline-block md:mx-2 md:mb-0 mb-4">
                
                <Button block size="sm" icon={<HiDownload />}>
                    Export
                </Button>
            </div>
            <div className="block lg:inline-block md:mb-0 mb-4">
                <Button block variant="solid" size="sm" icon={<HiPlusCircle />} onClick={()=>{navigate('/subcategory/newsubcategory')}}>
                    Add SubCategory
                </Button>
            </div>
        </div>
    )
}

export default SubCategoryTableTools