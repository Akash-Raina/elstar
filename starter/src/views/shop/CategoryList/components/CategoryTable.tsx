import { DataTable } from "@/components/shared"
import { useAppDispatch, useAppSelector } from "@/store"
import { useEffect, useMemo } from "react"
import { getCategory, setTableData } from "../store"
import { Badge } from "@/components/ui"
import cloneDeep from "lodash/cloneDeep"


const inventoryStatusColor:any = {
    0: {
        label: 'In Stock',
        dotClass: 'bg-emerald-500',
        textClass: 'text-emerald-500',
    },
    1: {
        label: 'Limited',
        dotClass: 'bg-amber-500',
        textClass: 'text-amber-500',
    },
    2: {
        label: 'Out of Stock',
        dotClass: 'bg-red-500',
        textClass: 'text-red-500',
    }
}

export const CategoryTable = ()=>{


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


    const onPaginationChange = (page: number) => {
        const newTableData = cloneDeep(tableData)
        newTableData.pageIndex = page
        dispatch(setTableData(newTableData))
    }


    useEffect(() => {
        dispatch(getCategory(tableData))
    }, [pageSize, pageIndex, total]);

    const tableData = useMemo(
        ()=>({pageSize, pageIndex, total}),
        [pageSize, pageIndex, total]
    )


    const columns  = useMemo(
        ()=>[
            {
                header: 'Name',
                accessorKey: 'category_name',
            },
            {
                header: 'Brands',
                accessorKey: 'brand'
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
            }
    ],[])

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
        />
    </div>
}