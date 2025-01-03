
import { ColumnDef, DataTable } from "@/components/shared"
import { useMemo } from "react"

type PayList = {
    no: number
    pay_term: string
    payment_type: string
}

const mainData = [
    {
        no: 1,
        pay_term: '100% advance',
        payment_type: 'Advance with order'
    },
    {
        no: 2,
        pay_term: 'Within 7 working days after material',
        payment_type: 'Partly payment'
    },
    {
        no: 3,
        pay_term: '50% advance remaining after material',
        payment_type: 'Partly payment'
    },
    {
        no: 4,
        pay_term: 'Advance',
        payment_type: 'Advance with order'
    }
]
const PayTermsList = ()=>{

    const columns: ColumnDef<PayList>[] = useMemo(
        ()=>[
            {
                header: 'No', 
                accessorKey: 'no',
            },
            {
                header: 'Pay term type co description ',
                accessorKey: 'pay_term',
            },
            {
                header: 'Payment Type',
                accessorKey: 'payment_type'
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

export default PayTermsList