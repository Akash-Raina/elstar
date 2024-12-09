import { DataTable } from "@/components/shared"
import { useAppDispatch, useAppSelector } from "@/store"
import { useEffect, useMemo } from "react"

import { Badge, Button } from "@/components/ui"
import cloneDeep from "lodash/cloneDeep"
import { setTableData, getSubCategory, toggleDeleteConfirmation, setSelectedSubCategory } from "../store/subCategorySlice"
import { useNavigate, useParams } from "react-router-dom"
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi"
import useThemeClass from "@/utils/hooks/useThemeClass"
import { TbHandClick } from "react-icons/tb"
import { SubCategoryDeleteConfirmation } from "./SubCategoryDeleteConfirmation"


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
        console.log('testing')
        navigate(`/subcategory/editsubcategory/${row.id}`)
    }

    const onDelete = ()=>{
        dispatch(toggleDeleteConfirmation(true))
        dispatch(setSelectedSubCategory(row.id))
    }

    return (
        <div className="flex justify-end text-lg">
            <span
                className={`cursor-pointer p-2 hover:${textTheme}`}
                onClickCapture={(e)=>{
                    (e).stopPropagation()
                    onEdit()
                }}
            >
                <HiOutlinePencil />
            </span>
            <span
                className="cursor-pointer p-2 hover:text-red-500"
                onClick={(e)=> {
                    (e).stopPropagation()
                    onDelete()
                }}
            >
                <HiOutlineTrash />
            </span>
        </div>
    )

}

export const SubCategoryTable = ()=>{

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const {id} = useParams();

    const { pageSize, pageIndex, total} = useAppSelector(
        (state:any) => state.shopSubCategoryList.data.tableData
    )
    const loading = useAppSelector(
        (state:any) => state.shopSubCategoryList.data.loading
    )
    const data = useAppSelector(
        (state:any) => state.shopSubCategoryList.data.subCategoryList
    )
    
    useEffect(() => {
        if(id) dispatch(getSubCategory({data:tableData, params: id}))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pageSize, pageIndex, total]);

    const tableData = useMemo(
        ()=>({pageSize, pageIndex, total}),
        [pageSize, pageIndex, total]
    )


    const columns  = useMemo(
        ()=>[
            {
                header: 'SubCategory Name',
                accessorKey: 'sub_category_name',
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
            }
    ],[])

    const changeTableRow = (row:any)=>{
        if(row.sub_category_name){
            navigate(`/productlist/${row.id}`)
        }
    }

    const onPaginationChange = (page: number) => {
        const newTableData = cloneDeep(tableData)
        console.log("table data", newTableData)
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
        onTableRowChange={changeTableRow}
        />
        <SubCategoryDeleteConfirmation/>
    </div>
}