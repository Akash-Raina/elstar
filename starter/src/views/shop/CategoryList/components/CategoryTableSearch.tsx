import Input from "@/components/ui/Input"
import { getCategory, setTableData, useAppDispatch, useAppSelector } from "../store"
import  debounce  from "lodash/debounce"
import { ChangeEvent, useRef } from "react"
import { HiOutlineSearch } from "react-icons/hi"
import cloneDeep from "lodash/cloneDeep"
import { TableQueries } from "@/@types/common"

const CategoryTableSearch = ()=>{

    const dispatch = useAppDispatch()

    const searchInput = useRef(null)
    
    const tableData = useAppSelector(
        (state: any) => state.shopCategoryList.data.tableData
    )

    const debounceFn = debounce(handleDebounceFn, 500)

    function handleDebounceFn(val: string){
        const newTableData = cloneDeep(tableData)
        newTableData.query = val
        newTableData.pageIndex = 1
        if(typeof val === "string" && val.length > 1){
            fetchData(newTableData)
        }
        if(typeof val === "string" && val.length === 0){
            fetchData(newTableData)
        }
    }

    const fetchData = (data: TableQueries)=>{
        dispatch(setTableData(data))
        dispatch(getCategory(data))
    }

    const onEdit = (e: ChangeEvent<HTMLInputElement>)=>{
        debounceFn(e.target.value)
    }

    return (
        <Input
            ref={searchInput}
            className="max-w-md md:w-52 md:mb-0 mb-4"
            size="sm"
            placeholder="Search product"
            prefix={<HiOutlineSearch className="text-lg" />}
            onChange={onEdit}
        />
    )
}

export default CategoryTableSearch