
import { ColumnDef, DataTable } from "@/components/shared"
import { useMemo } from "react"

type IssueList = {
    issue_code: number
    issue_type_name: string
    type: string
}

const mainData = [
    {
        issue_code: 1,
        issue_type_name: 'Revenue',
        type: 'Revenue'
    },
    {
        issue_code: 2,
        issue_type_name: 'Capital',
        type: 'Capital'
    },
]
const IssueList = ()=>{

    const columns: ColumnDef<IssueList>[] = useMemo(
        ()=>[
            {
                header: 'Code',
                accessorKey: 'issue_code',
            },
            {
                header: 'Issue type name',
                accessorKey: 'issue_type_name',
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

export default IssueList