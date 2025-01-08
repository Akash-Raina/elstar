import { useMemo } from "react"
import { ColumnDef } from "@tanstack/react-table"
import { DataTable } from "@/components/shared"

type MolasseslocalList = {
    code: number
    currency_name: string
}

const Data = [
    {
        code: 1,
        currency_name: 'INR'
    },
    {
        code: 2,
        currency_name: 'INR'
    },
]
const MolassesCustomerList = ()=>{

    const columns: ColumnDef<MolasseslocalList>[] = useMemo(
        ()=>[
            {
                header: 'Code',
                accessorKey: 'code',
            },
            {
                header: 'Currency Name',
                accessorKey: 'currency_name',
            }
        ],[]
    )

    return <>
        <DataTable
            columns={columns}
            data={Data}
        />
    </>
}

export default MolassesCustomerList