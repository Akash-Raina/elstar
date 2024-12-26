import { ColumnDef, DataTable } from "@/components/shared"
import { useMemo } from "react"

type MainList = {
    main_code: number
    group_name: string
    status: string
}

const mainData = [
    {
        main_code: 1,
        group_name: 'Products',
        status: 'Revenue'
    },
    {
        main_code: 2,
        group_name: 'By Products',
        status: 'Capital'
    },
]
const MainList = ()=>{

    const columns: ColumnDef<MainList>[] = useMemo(
        ()=>[
            {
                header: 'Code',
                accessorKey: 'main_code',
            },
            {
                header: 'Group Name',
                accessorKey: 'group_name',
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

export default MainList