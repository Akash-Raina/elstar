import { ColumnDef, DataTable } from "@/components/shared"
import { useMemo } from "react"

type SupplierMasterList = {
    code: number
    heading_name: string
    description: string
    type: string
}

const mainData = [
    {
        code: 1,
        heading_name: 'Revenue',
        description: 'Revenue',
        type: 'Revenue'
    },
    {
        code: 2,
        heading_name: 'Capital',
        description: 'Capital',
        type: 'Capital'
    },
]
const SupplierList = ()=>{

    const columns: ColumnDef<SupplierMasterList>[] = useMemo(
        ()=>[
            {
                header: 'Code',
                accessorKey: 'code',
            },
            {
                header: 'Heading name',
                accessorKey: 'heading_name',
            },
            {
                header: 'Description',
                accessorKey: 'description'
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