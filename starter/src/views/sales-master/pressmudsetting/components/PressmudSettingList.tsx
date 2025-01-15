import { useMemo } from "react"
import { ColumnDef } from "@tanstack/react-table"
import { DataTable } from "@/components/shared"

type CurrencyType = {
    code: number  
    name: string
}

const countryData = [
    {
        name: 'Ethanol Sale OMC',
        code: 1,
    },
    {
        name: 'Ethanol Sale OMC',
        code: 2,
    },
]
const PressmudSettingList = ()=>{

    const columns: ColumnDef<CurrencyType>[] = useMemo(
        ()=>[
            {
                header: 'Code',
                accessorKey: 'code',
            },
            {
                header: 'Name',
                accessorKey: 'name',
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

export default PressmudSettingList