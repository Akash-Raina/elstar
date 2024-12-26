import { ColumnDef, DataTable } from "@/components/shared"
import { useMemo } from "react"

type GoDownList = {
    go_down_code: number
    go_down_name: string
}

const mainData = [
    {
        go_down_code: 1,
        go_down_name: 'Store Sugar',
    },
    {
        go_down_code: 2,
        go_down_name: 'Store CO Gen',
    },
]
const GoDownList = ()=>{

    const columns: ColumnDef<GoDownList>[] = useMemo(
        ()=>[
            {
                header: 'Code',
                accessorKey: 'go_down_code',
            },
            {
                header: 'Godown Name',
                accessorKey: 'go_down_name',
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

export default GoDownList