import { ColumnDef, DataTable } from "@/components/shared"
import { useMemo } from "react"

type SubList = {
    sub_code: number
    sub_group_name: string
    main_group: string
}

const mainData = [
    {
        sub_code: 1,
        sub_group_name: 'General Sub Group',
        main_group: 'General Main Group'
    },
    {
        sub_code: 2,
        sub_group_name: 'AGRI',
        main_group: 'AGRI'
    },
]
const SubList = ()=>{

    const columns: ColumnDef<SubList>[] = useMemo(
        ()=>[
            {
                header: 'Code',
                accessorKey: 'sub_code',
            },
            {
                header: 'Sub Group desc',
                accessorKey: 'sub_group_name',
            },
            {
                header: 'Main group',
                accessorKey: 'main_group'
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

export default SubList