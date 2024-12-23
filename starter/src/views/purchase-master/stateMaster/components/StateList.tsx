import { ColumnDef, DataTable } from "@/components/shared"
import { useMemo } from "react"

type StateList = {
    state_code: string
    state_name: string
}

const stateData = [
    {
        state_code: 1,
        state_name: 'karnataka'
    },
    {
        state_code: 2,
        state_name: 'J&K'
    },

]


const StateList = ()=>{

    const columns: ColumnDef<StateList>[] = useMemo(
        ()=>[
            {
                header: 'State Code',
                accessorKey: 'state_code',
            },
            {
                header: 'State Name',
                accessorKey: 'state_name',
            },
        ],[]
    )

    return <>
        <DataTable
            columns={columns}
            data={stateData}
        />
    </>
}

export default StateList