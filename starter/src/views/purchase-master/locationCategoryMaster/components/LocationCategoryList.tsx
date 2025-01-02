
import { ColumnDef, DataTable } from "@/components/shared"
import { useMemo } from "react"

type LocationList = {
    code: number
    glpl_code: string
    glpl_name: string
    unit: string
    description: string
    status: string
}

const mainData = [
    {
        code: 1,
        glpl_code: "123",
        glpl_name: "Cash",
        unit: "Revenue",
        description: "Revenue",
        status: "Revenue"
    },
    {
        code: 2,
        glpl_code: "456",
        glpl_name: "Cash",
        unit: "Capital",
        description: "Capital",
        status: "Capital"
    },
]
const LocationCategoryList = ()=>{

    const columns: ColumnDef<LocationList>[] = useMemo(
        ()=>[
            {
                header: 'Code', 
                accessorKey: 'code',
            },
            {
                header: 'GLPL Code',
                accessorKey: 'glpl_code',
            },
            {
                header: 'GLPL Name',
                accessorKey: 'glpl_name'
            },
            {
                header: 'Unit',
                accessorKey: 'unit'
            },
            {
                header: 'Description',
                accessorKey: 'description'
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

export default LocationCategoryList