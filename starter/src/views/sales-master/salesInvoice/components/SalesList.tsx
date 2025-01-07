import { useMemo } from "react"
import { ColumnDef } from "@tanstack/react-table"
import { DataTable } from "@/components/shared"

type SalesList = {
    bank_name: string
    branch_name: string
    ifsc_code: number
}

const countryData = [
    {
        bank_name: 'SBI',
        branch_name: 'Mumbai',
        ifse_code: 12232
    },
    {
        bank_name: 'HDFC',
        branch_name: 'Pune',
        ifse_code: 23422
    },
]
const SalesList = ()=>{

    const columns: ColumnDef<SalesList>[] = useMemo(
        ()=>[
            {
                header: 'Bank Name',
                accessorKey: 'bank_name',
            },
            {
                header: 'Branch Name',
                accessorKey: 'branch_name',
            },
            {
                header: 'IFSC Code',
                accessorKey: 'ifse_code'
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

export default SalesList