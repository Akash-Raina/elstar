import { useMemo } from "react"
import { ColumnDef } from "@tanstack/react-table"
import { DataTable } from "@/components/shared"

type ReleaseOrderType = {
    code: number
    name: string
}

const countryData = [
    {
        code: 1,
        name: 'Sugar-Free Sale',
    },
    {
        code: 2,
        name: 'Sugar-Free Sale',
    },
]
const ReleaseOrderList = ()=>{

    const columns: ColumnDef<ReleaseOrderType>[] = useMemo(
        ()=>[
            {
                header: 'Code',
                accessorKey: 'code',
            },
            {
                header: 'Name',
                accessorKey: 'name',
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

export default ReleaseOrderList