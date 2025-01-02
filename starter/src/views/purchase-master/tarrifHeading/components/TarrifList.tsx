
import { ColumnDef, DataTable } from "@/components/shared"
import { useMemo } from "react"

type TarrifList = {
    code: number
    payment_type: string
    description: string
    status: string
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
const TarrifList = ()=>{

    const columns: ColumnDef<TarrifList>[] = useMemo(
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
                header: 'type',
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

export default TarrifList