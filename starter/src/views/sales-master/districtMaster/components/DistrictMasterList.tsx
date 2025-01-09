import { useMemo } from "react"
import { ColumnDef } from "@tanstack/react-table"
import { DataTable } from "@/components/shared"

type DistrictList = {
    district_code: number
    district_name: string
    state: string
}

const countryData = [
    {
        district_code: 21,
        district_name: 'Ahemdabad',
        state: 'Gujrat'
    },
    {
        district_code: 57,
        district_name: "Ahemdnagar",
        state: 'Maharashtra'
    },
]

const DistrictMasterList = ()=>{

    const columns: ColumnDef<DistrictList>[] = useMemo(
        ()=>[
            {
                header: 'District Code',
                accessorKey: 'district_code',
            },
            {
                header: 'District Name',
                accessorKey: 'district_name',
            },
            {
                header: 'State',
                accessorKey: 'state'
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

export default DistrictMasterList