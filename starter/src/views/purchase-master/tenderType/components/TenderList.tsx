import { ColumnDef, DataTable } from "@/components/shared"
import { useMemo } from "react"

type TenderList = {
    tender: number
    tender_type_name: string
    type: string
}

const mainData = [
    {
        tender_code: 1,
        tender_type_name: 'Revenue',
        type: 'Revenue'
    },
    {
        tender_code: 2,
        tender_type_name: 'Capital',
        type: 'Capital'
    },
]
const TenderList = ()=>{

    const columns: ColumnDef<TenderList>[] = useMemo(
        ()=>[
            {
                header: 'Code',
                accessorKey: 'tender_code',
            },
            {
                header: 'Tender type name',
                accessorKey: 'tender_type_name',
            },
            {
                header: 'Type',
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

export default TenderList