import { Input } from "@/components/ui"
import { useRef } from "react"
import { HiOutlineSearch } from "react-icons/hi"

const GradeTableSearch = ()=>{

    const searchInput = useRef(null)
    
    return <>
        <Input
            ref={searchInput}
            className="max-w-md md:w-52 md:mb-0 mb-4"
            size="sm"
            placeholder="Search product"
            prefix={<HiOutlineSearch className="text-lg" />}
        />
    </>
}

export default GradeTableSearch


