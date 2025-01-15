import { useMemo } from "react"
import { ColumnDef } from "@tanstack/react-table"
import { DataTable } from "@/components/shared"

type CountryType = {
    code: number  
    state_name: string
    state_code: string
}

const countryData = [
    {
        code: 5001,
        state_name: 'Sugar',
        state_code: 29
    },
    {
        code: 5002,
        state_name: 'Ethanol',
        state_code: 37
    },
]
const StateMasterList = ()=>{

    const columns: ColumnDef<CountryType>[] = useMemo(
        ()=>[
            {
                header: 'Code',
                accessorKey: 'code',
            },
            {
                header: 'State Name',
                accessorKey: 'state_name',
            },
            {
                header: 'State Code',
                accessorKey: 'state_code'
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

export default StateMasterList