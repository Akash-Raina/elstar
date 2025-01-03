
import { ColumnDef, DataTable } from "@/components/shared"
import { useMemo } from "react"

type LocationMasterListType = {
    no: number
    type_name: string
    work_wquisition: string
}

const mainData = [
    {
        no: '1',
        type_name: 'Labour Bill',
        work_wquisition: 'Revenue'
    },
    {
        no: '2',
        type_name: 'Work Bill',
        work_wquisition: 'Revenue'
    },
    {
        no: '3',
        type_name: 'Professional Fees',
        work_wquisition: 'Revenue'
    },
    {
        no: '4',
        type_name: 'Machinery Hire',
        work_wquisition: 'Revenue'
    },
]
const WorkOrderList = ()=>{

    const columns: ColumnDef<LocationMasterListType>[] = useMemo(
        ()=>[
            {
                header: 'No',
                accessorKey: 'no',
            },
            {
                header: 'Type Name',
                accessorKey: 'type_name',
            },
            {
                header: 'Work Wquisition',
                accessorKey: 'work_wquisition'
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