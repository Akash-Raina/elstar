import { DataTable } from "@/components/shared"
import { useEffect, useMemo } from "react"
import { getCategory, useAppDispatch, useAppSelector, setSelectedCategory, setTableData, toggleDeleteConfirmation } from "../store"
import { Badge } from "@/components/ui"
import cloneDeep from "lodash/cloneDeep"
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi"
import { useNavigate } from "react-router-dom"
import useThemeClass from "@/utils/hooks/useThemeClass"
import { CategoryDeleteConfirmation } from "./CategoryDeleteConfirmation"


const inventoryStatusColor:any = {
    0: {
        label: 'Active',
        dotClass: 'bg-emerald-500',
        textClass: 'text-emerald-500',
    },
    1: {
        label: 'Inactive',
        dotClass: 'bg-red-500',
        textClass: 'text-red-500',
    }
}

const ActionColumn = ({row}: {row: any})=>{
    const navigate = useNavigate();
    const dispatch = useAppDispatch()
    const { textTheme } = useThemeClass()

    const onEdit = ()=>{

        navigate(`/category/editcategory/${row.id}`)
    }

    const onDelete = ()=>{
            console.log("testing delete")
            dispatch(toggleDeleteConfirmation(true))
            dispatch(setSelectedCategory(row.id))
    }

    return (
        <>
        <div className="flex justify-end text-lg">
            <span
                className={`cursor-pointer p-2 hover:${textTheme}`}
                onClickCapture={(e)=>{
                    e.stopPropagation();
                    onEdit()
                }}
            >
                <HiOutlinePencil />
            </span>
            <span
                className="cursor-pointer p-2 hover:text-red-500"
                onClick={(e)=>{
                    e.stopPropagation();
                    onDelete()
                }}
            >
                <HiOutlineTrash />
            </span>
        </div>
            
        </>
        
    )

}

export const CategoryTable = ()=>{

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const { pageSize, pageIndex, total} = useAppSelector(
        (state:any) => state.shopCategoryList.data.tableData
    )
    const loading = useAppSelector(
        (state:any) => state.shopCategoryList.data.loading
    )
    const data = useAppSelector(
        (state:any) => state.shopCategoryList.data.categoryList
    )
    const brandList = useAppSelector(
        (state:any) => state.shopCategoryList.data.brandList
    )

    const changeTableRow = (row: any)=>{

        if (row.category_name) {
            navigate(`/subcategory/${row.id}`)
        };


    }
    
    useEffect(() => {
        dispatch(getCategory(tableData))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pageSize, pageIndex, total]);

    const tableData = useMemo(
        ()=>({pageSize, pageIndex, total}),
        [pageSize, pageIndex, total]
    )


    const columns  = useMemo(
        ()=>[
            {
                header: 'Category Name',
                accessorKey: 'category_name',
            },
            {
                header: 'Status',
                accessorKey:'status',
                cell:(props:any)=>{
                    const {status} = props.row.original
                    return (
                        <div className="flex items-center gap-2">
                            <Badge
                                className={inventoryStatusColor[status].dotClass}
                            />
                            <span
                                className={`capitalize font-semibold ${inventoryStatusColor[status].textClass}`}
                            >
                                {inventoryStatusColor[status].label}
                            </span>
                        </div>
                    )
                }
            },
            {
                header: '',
                id: 'action',
                cell: (props:any)=> <ActionColumn row={props.row.original}/>
            },
            
    ],[])

    const onPaginationChange = (page: number) => {
        const newTableData = cloneDeep(tableData)
        newTableData.pageIndex = page
        dispatch(setTableData(newTableData))
    }

    const onSelectChange = (value: number) => {
        const newTableData = cloneDeep(tableData)
        newTableData.pageSize = Number(value)
        newTableData.pageIndex = 1
        dispatch(setTableData(newTableData))
    }


    return <div className="cursor-pointer">
        <DataTable
        columns={columns}
        data={data}
        loading = {loading}
        pagingData={{
            total: tableData.total as number,
            pageIndex: tableData.pageIndex as number,
            pageSize: tableData.pageSize as number,
        }}
        onPaginationChange={onPaginationChange}
        onSelectChange={onSelectChange}
        onTableRowChange = {changeTableRow}
        />
        <CategoryDeleteConfirmation/>
    </div>
}