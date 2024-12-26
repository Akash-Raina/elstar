import { ColumnDef, DataTable } from "@/components/shared"
import { useMemo } from "react"

type SubList = {
    terms_code: number
    document_number: string
}

const mainData = [
    {
        terms_code: 1,
        document_number: 'Revenue'
    },
    {
        terms_code: 2,
        document_number: 'Capital'
    },
]
const TermsList = ()=>{

    const columns: ColumnDef<SubList>[] = useMemo(
        ()=>[
            {
                header: 'Code',
                accessorKey: 'terms_code',
            },
            {
                header: 'Document No',
                accessorKey: 'document_number',
            },
        ],[]
    )

    return <>
        <DataTable
            columns={columns}
            data={mainData}
        />
    </>
}

export default TermsList