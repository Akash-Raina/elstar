import { ColumnDef, DataTable } from "@/components/shared"
import { useMemo } from "react"

type SettingList = {
    code: string
    gl_code: string
    description: string
}

const countryData = [
    {
        code:1,
        gl_code: 122,
        description: 'Handing Charges',
    },
    {
        code: 2,
        gl_code: 122,
        description: 'Handling Charges',
    },

]
const SettingList = ()=>{

    const columns: ColumnDef<SettingList>[] = useMemo(
        ()=>[
            {
                header: 'Code',
                accessorKey: 'code'
            },
            {
                header: 'GL Code',
                accessorKey: 'gl_code',
            },
            {
                header: 'Description',
                accessorKey: 'description',
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

export default SettingList