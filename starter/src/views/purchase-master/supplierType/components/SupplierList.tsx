import { ColumnDef, DataTable } from "@/components/shared"
import { useMemo } from "react"

type SupplierList = {
    supplier_code: number
    supplier_type_name: string
    type: string
}

const mainData = [
    {
        supplier_code: 1,
        supplier_type_name: 'Revenue',
        type: 'Revenue'
    },
    {
        supplier_code: 2,
        supplier_type_name: 'Capital',
        type: 'Capital'
    },
]
const SupplierList = ()=>{

    const columns: ColumnDef<SupplierList>[] = useMemo(
        ()=>[
            {
                header: 'Code',
                accessorKey: 'supplier_code',
            },
            {
                header: 'Supplier type name',
                accessorKey: 'supplier_type_name',
            },
            {
                header: 'Type',
                accessorKey: 'type'
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

export default SupplierList