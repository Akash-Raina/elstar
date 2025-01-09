import { useMemo } from "react"
import { ColumnDef } from "@tanstack/react-table"
import { DataTable } from "@/components/shared"

type CurrencyType = {
    trans_id: number  
    e_commerce_operator: string
}

const countryData = [
    {
        trans_id: '21',
        e_commerce_operator: 'No'
    },
    {
        trans_id: '57',
        e_commerce_operator: 'No'
    },
]
const BalasseSaleList = ()=>{

    const columns: ColumnDef<CurrencyType>[] = useMemo(
        ()=>[
            {
                header: 'Trans Id',
                accessorKey: 'trans_id',
            },
            {
                header: 'E-Commerce Operator',
                accessorKey: 'e_commerce_operator',
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

export default BalasseSaleList