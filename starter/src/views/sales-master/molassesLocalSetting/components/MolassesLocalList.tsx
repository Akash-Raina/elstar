import { useMemo } from "react"
import { ColumnDef } from "@tanstack/react-table"
import { DataTable } from "@/components/shared"

type MolasseslocalList = {
    section: string
    bill_type: string
    debit_gl_code: number
}

const countryData = [
    {
        section: 'A',
        bill_type: "Mumbai",
        debit_gl_code: 5756
    },
    {
        section: 'B',
        bill_type: "Pune",
        debit_gl_code: 3434
    },
]
const MolassesLocalList = ()=>{

    const columns: ColumnDef<MolasseslocalList>[] = useMemo(
        ()=>[
            {
                header: 'Section',
                accessorKey: 'section',
            },
            {
                header: 'Bill Type',
                accessorKey: 'bill_type',
            },
            {
                header: 'Debit GL Code',
                accessorKey: 'debit_gl_code',
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

export default MolassesLocalList