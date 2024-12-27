
import { ColumnDef, DataTable } from "@/components/shared"
import { useMemo } from "react"

type ItemList = {
    code: number
    sub_group: string
    item_no: string
    extra_desc: string
}

const mainData = [
    {
        code: 1,
        sub_group: 'Revenue',
        item_no: 'Revenue',
        extra_desc: 'Revenue'
    },
    {
        code: 2,
        sub_group: 'Capital',
        item_no: 'Capital',
        extra_desc: 'Capital'
    },
]
const ItemMasterList = ()=>{

    const columns: ColumnDef<ItemList>[] = useMemo(
        ()=>[
            {
                header: 'Code', 
                accessorKey: 'code',
            },
            {
                header: 'Sub Group',
                accessorKey: 'sub_group',
            },
            {
                header: 'item/Bin Card No',
                accessorKey: 'item_no'
            },
            {
                header: 'Extra Desc',
                accessorKey: 'extra_desc'
            }
        ],[]
    )

    return <>
        <DataTable
            columns={columns}
            data={mainData}
        />
    </>
}

export default ItemMasterList