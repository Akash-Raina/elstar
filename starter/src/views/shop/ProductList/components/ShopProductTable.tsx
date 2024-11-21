import { useAppDispatch, useAppSelector } from '@/store'
import  cloneDeep  from 'lodash/cloneDeep'
import { getList, setTableData } from '../store'
import { useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { Badge } from '@/components/ui'
import { DataTable } from '@/components/shared'

const inventoryStatusColor: any = {
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
    },
}

export const ShopProductTable = () => {
    const dispatch = useAppDispatch()

    const {id} = useParams();

    const { pageIndex, pageSize, total } = useAppSelector(
        (state: any) => state.shopProductList.data.tableData
    )
    const loading = useAppSelector(
        (state: any) => state.shopProductList.data.loading
    )
    const data = useAppSelector(
        (state: any) => state.shopProductList.data.productList
    )

    const onPaginationChange = (page:number)=>{
        const newTableData = cloneDeep(tableData)
        newTableData.pageIndex = page
        dispatch(setTableData(newTableData))
    }
    const tableData = useMemo(
        ()=>({pageSize, pageIndex, total}),
        [pageSize, pageIndex, total]
    )

    useEffect(()=>{
        if (id) {
            dispatch(getList({ data: tableData, params: id })); // Correct call
        }
    }, [dispatch, id, tableData])


    const columns  = useMemo(
        ()=>[
            {
                header: 'Name',
                accessorKey: 'product_name',
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
