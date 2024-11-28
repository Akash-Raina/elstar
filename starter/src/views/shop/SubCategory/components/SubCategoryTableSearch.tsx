import Input from "@/components/ui/Input"
import { ChangeEvent, useRef } from "react"
import { HiOutlineSearch } from "react-icons/hi"
import { useAppSelector, useAppDispatch, setTableData, getSubCategory } from "../store/index."
import debounce from "lodash/debounce"
import cloneDeep from "lodash/cloneDeep"
import { useParams } from "react-router-dom"
import { TableQueries } from "@/@types/common"


const SubCategoryTableSearch = ()=>{

    const dispatch = useAppDispatch();
    const {id} = useParams();

    const searchInput = useRef(null)
    
    const tableData =useAppSelector(
        (state: any) => state.shopSubCategoryList.data.tableData
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
        const allData = {...data};
        if(id){
        const payload = {data: allData, params: id}
        dispatch(getSubCategory(payload))
        }
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

export default SubCategoryTableSearch