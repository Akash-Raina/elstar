import { ColumnDef, DataTable } from "@/components/shared"
import { useMemo } from "react"

type PurchaseOrderList = {
    purchase_code: number
    order_name: string
}

const mainData = [
    {
        purchase_code: 1,
        order_name: 'Revenue',
    },
    {
        purchase_code: 2,
        order_name: 'Capital',
    },
]

const PurchaseOrderList = ()=>{

    const columns: ColumnDef<PurchaseOrderList>[] = useMemo(
        ()=>[
            {
                header: 'Code',
                accessorKey: 'purchase_code',
            },
            {
                header: 'Type Name',
                accessorKey: 'order_name',
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

export default PurchaseOrderList