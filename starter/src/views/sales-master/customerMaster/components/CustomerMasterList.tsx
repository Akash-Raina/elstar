import { useMemo } from "react"
import { ColumnDef } from "@tanstack/react-table"
import { DataTable } from "@/components/shared"

type CustomerList = {
    customer_code: string
    select_member: number
    ecommerce_operator: number
}

const countryData = [
    {
        customer_code: 'A',
        select_member: 2,
        ecommerce_operator: 'No'
    },
    {
        customer_code: 'B',
        select_member: 4,
        ecommerce_operator: 'No'
    },
]
const CustomerMasterList = ()=>{

    const columns: ColumnDef<CustomerList>[] = useMemo(
        ()=>[
            {
                header: 'Customer Code',
                accessorKey: 'customer_code',
            },
            {
                header: 'Select Member',
                accessorKey: 'select_member',
            },
            {
                header: 'Ecommerce Operator ',
                accessorKey: 'ecommerce_operator'
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

export default CustomerMasterList