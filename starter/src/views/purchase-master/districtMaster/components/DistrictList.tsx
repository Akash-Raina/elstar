import { ColumnDef, DataTable } from "@/components/shared"
import { useMemo } from "react"

type DistrictList = {
    district_code: string
    district_name: string
    state: string
}

const countryData = [
    {
        district_code: 1,
        district_name: 'Ahmadnager',
        state: 'Gujrat'
    },
    {
        district_code: 2,
        district_name: 'Ajmer',
        state: 'Rajasthan'
    },

]
const DistrictList = ()=>{

    const columns: ColumnDef<DistrictList>[] = useMemo(
        ()=>[
            {
                header: 'Code',
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

export default DistrictList