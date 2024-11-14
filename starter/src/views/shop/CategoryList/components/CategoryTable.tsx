import { DataTable } from "@/components/shared"
import { useAppDispatch, useAppSelector } from "@/store"
import { useEffect, useMemo } from "react"
import { getCategory } from "../store"
import { Badge } from "@/components/ui"
import { useNavigate } from "react-router-dom"

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
    console.log("thunkData", data)
    const tableData = {
        pageSize, pageIndex, total
    }

    useEffect(() => {
        dispatch(getCategory(tableData))
    }, [pageSize, pageIndex, total]);

    // const tableData = useMemo(
    //     ()=>({pageSize, pageIndex, total}),
    //     [pageSize, pageIndex, total]
    // )


    const columns  = useMemo(
        ()=>[
            {
                header: 'Name',
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
            }
    ],[])
    function navOnClick(){
        navigate('/subcategory')
    }
    return <div className="cursor-pointer">
        <DataTable
        onRowClick={navOnClick}
        columns={columns}
        data={data}
        loading = {loading}
        />
    </div>
}