import Button from '@/components/ui/Button'
import { HiDownload, HiPlusCircle, HiOutlineFilter } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import LocationCategoryTableSearch from './LocationCategoryTableSearch'

export const LocationCategoryTableTools = () => {
    const navigate = useNavigate()
    return (
        <div className="flex flex-col lg:flex-row lg:items-center">
            <LocationCategoryTableSearch/>
            <div className="block lg:inline-block md:mx-2 md:mb-0 mb-4">
                <Button block size='sm' icon={<HiOutlineFilter/>}>Filter</Button>
            </div>

            <div className="block lg:inline-block md:mx-2 md:mb-0 mb-4">
                
                <Button block size="sm" icon={<HiDownload />}>
                    Export
                </Button>
            </div>
            <div className="block lg:inline-block md:mb-0 mb-4">
                <Button block variant="solid" color='red' size="sm" icon={<HiPlusCircle />} onClick={()=>{navigate('/addlocation')}}>
                    Add
                </Button>
            </div>
        </div>
    )
}
