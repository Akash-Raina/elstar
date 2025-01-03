
import { ColumnDef, DataTable } from "@/components/shared"
import { useMemo } from "react"

type LocationMasterListType = {
    code: number
    work_name: string
    work_type: string
    status: string
}

const mainData = [
    {
        code: '1',
        work_name: 'Cash',
        work_type: 'Revenue',
        status: 'Revenue'
    },
    {
        code: '2',
        work_name: 'Card',
        work_type: 'Capital',
        status: 'Capital'
    }
]
const WorkOrderList = ()=>{

    const columns: ColumnDef<LocationMasterListType>[] = useMemo(
        ()=>[
            {
                header: 'No',
                accessorKey: 'code',
            },
            {
                header: 'Work Name',
                accessorKey: 'work_name',
            },
            {
                header: 'Work type',
                accessorKey: 'work_type'
            },
            {
                header: 'Status',
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

export default WorkOrderList