
import { ColumnDef, DataTable } from "@/components/shared"
import { useMemo } from "react"

type PaymentList = {
    code: number
    payment_type: string
    description: string
    status: string
}

const mainData = [
    {
        code: 1,
        payment_type: 'Cash',
        description: 'Revenue',
        status: 'Revenue'
    },
    {
        code: 2,
        payment_type: 'Card',
        description: 'Capital',
        status: 'Capital'
    },
]
const PaymentTermList = ()=>{

    const columns: ColumnDef<PaymentList>[] = useMemo(
        ()=>[
            {
                header: 'Code', 
                accessorKey: 'code',
            },
            {
                header: 'Payment type ',
                accessorKey: 'payment_type',
            },
            {
                header: 'Description',
                accessorKey: 'description'
            },
            {
                header: 'status',
                accessorKey: 'status'
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

export default PaymentTermList