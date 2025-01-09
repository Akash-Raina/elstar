import { useMemo } from "react"
import { ColumnDef } from "@tanstack/react-table"
import { DataTable } from "@/components/shared"

type GodownType = {
    revenue_center: string  
    code: number
}

const countryData = [
    {
        revenue_center: 'Sugar',
        code: 21,
    },
    {
        revenue_center: 'Sugar',
        code: 57,
    },
]
const GodownList = ()=>{

    const columns: ColumnDef<GodownType>[] = useMemo(
        ()=>[
            {
                header: 'Code',
                accessorKey: 'code',
            },
            {
                header: 'Revenue Center',
                accessorKey: 'revenue_center',
            }
        ],[]
    )

    return <>
        <DataTable
            columns={columns}
            data={countryData}
        />
    </>
}

export default GodownList