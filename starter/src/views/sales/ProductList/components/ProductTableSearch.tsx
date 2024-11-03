import { ChangeEvent, useRef } from 'react'
import Input from '@/components/ui/Input'
import { HiOutlineSearch } from 'react-icons/hi'
import { useAppDispatch, setTableData, useAppSelector, getProducts } from '../store'
import { TableQueries } from '@/@types/common'
import  cloneDeep  from 'lodash/cloneDeep'
import  debounce  from 'lodash/debounce'

const ProductTableSearch = () => {
    const dispatch = useAppDispatch()

    const searchInput = useRef(null)

    const tableData = useAppSelector(
        (state) => state.salesProductList.data.tableData
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
        dispatch(getProducts(data))
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

export default ProductTableSearch
