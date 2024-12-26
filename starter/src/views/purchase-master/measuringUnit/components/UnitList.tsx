import { ColumnDef, DataTable } from "@/components/shared"
import { useMemo } from "react"

type UnitList = {
    unit_code: number
    unit_name: string
}

const mainData = [
    {
        unit_code: 1,
        unit_name: 'QTL',
    },
    {
        unit_code: 2,
        unit_name: 'MT',
    },
]
const UnitList = ()=>{

    const columns: ColumnDef<UnitList>[] = useMemo(
        ()=>[
            {
                header: 'Code',
                accessorKey: 'unit_code',
            },
            {
                header: 'Unit Description',
                accessorKey: 'unit_name',
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

export default UnitList