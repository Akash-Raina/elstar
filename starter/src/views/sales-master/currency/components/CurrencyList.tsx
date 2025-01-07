import { useMemo } from "react"
import { ColumnDef } from "@tanstack/react-table"
import { DataTable } from "@/components/shared"

type CurrencyType = {
    currency_name: string  
    code: number
}

const countryData = [
    {
        currency_name: 'INR',
        code: 1,
    },
    {
        currency_name: 'INR',
        code: 2,
    },
]
const CurrencyList = ()=>{

    const columns: ColumnDef<CurrencyType>[] = useMemo(
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
            data={countryData}
        />
    </>
}

export default CurrencyList